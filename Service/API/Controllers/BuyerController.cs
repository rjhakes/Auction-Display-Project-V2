using System;
using System.Diagnostics;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using BL;
using Models;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BuyerController : ControllerBase
    {
        private readonly IBuyerBL _buyerBL;
        // private readonly DataContext _context;
        // private readonly IMediator _mediator;
        private readonly ILogger<BuyerController> _logger;
        
        public BuyerController(IBuyerBL buyerBL, ILogger<BuyerController> logger) //IMediator mediator)
        {
            _buyerBL = buyerBL;
            _logger = logger;
            // _mediator = mediator;
        }

        // public BuyerController(DataContext context)
        // {
        //     _context = context;
        // }

        // GET: api/<BuyerController>
        [HttpGet]
        public async Task<IActionResult> GetBuyersAsync()
        {
            return Ok(await _buyerBL.GetBuyersAsync());
            // return await _mediator.Send(new List.Query());
        }

        // GET: api/<BuyerController>/5
        [HttpGet("{id}")]
        [Produces("application/json")]
        public async Task<IActionResult> GetBuyerByIdAsync(Guid id)
        {
            var buyer = await _buyerBL.GetBuyerByIdAsync(id);
            if (buyer == null) return NotFound();
            return Ok(buyer);
            // return Ok();
        }

        // POST: api/<BuyerController>
        [HttpPost]
        [Consumes("application/json")]
        public async Task<IActionResult> AddBuyerAsync([FromBody] Buyer buyer)
        {
            try
            {
                
                await _buyerBL.AddBuyerAsync(buyer);
                return CreatedAtAction("AddBuyer", buyer);
            }
            catch (Exception e)
            {
                // System.Diagnostics.Debug.WriteLine(e);
                return StatusCode(400);
            }
        }

        [HttpPost("import")]
        [Consumes("application/json")]
        public async Task<IActionResult> AddBuyerListAsync([FromBody] List<Buyer> buyers)
        {
            try
            {
                _logger.LogInformation("Importing Buyer LIst");
                await _buyerBL.AddBuyerListAsync(buyers);
                return CreatedAtAction("AddBuyerList", buyers);
            }
            catch (Exception e)
            {
                _logger.LogError(e.ToString());
                return StatusCode(400);
            }
        }

        // Put: api/<BuyerController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateBuyerAsync(Guid id, [FromBody] Buyer buyer)
        {
            try
            {
                await _buyerBL.UpdateBuyerAsync(buyer);
                return NoContent();
            }
            catch
            {
                return StatusCode(500);
            }
        }

        // DELETE api/<BuyerController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBuyerAsync(Guid id)
        {
            try
            {
                await _buyerBL.DeleteBuyerAsync(await _buyerBL.GetBuyerByIdAsync(id));
                return NoContent();
            }
            catch
            {
                return StatusCode(500);
            }
        }

        [HttpDelete("deleteAll")]
        public async Task<IActionResult> DeleteBuyersAllAsync()
        {
            try
            {
                await _buyerBL.DeleteBuyersAllAsync();
                return NoContent();
            }
            catch
            {
                return StatusCode(500);
            }
        }

        // GET: api/<BuyerController>/5
        // [HttpGet("{bNum}")]
        // [Produces("application/json")]
        // public async Task<IActionResult> GetBuyerByBNumAsync(int bNum)
        // {
        //     // var buyer = await _buyerBL.GetBuyerByBNumAsync(bNum);
        //     // if (buyer == null) return NotFound();
        //     // return Ok(buyer);
        //     return Ok();
        // }

        // GET: api/<BuyerController/<email>
        // [HttpGet]
        // [Route("/api/Buyer/email/{buyerEmail}")]
        // [Produces("application/json")]
        // public async Task<IActionResult> GetBuyerByEmail(string buyerEmail)
        // {
        //     var buyer = await _buyerBL.GetBuyerByEmail(buyerEmail);
        //     if (buyer == null) return NotFound();
        //     return Ok(buyer);
        // }
    }
}