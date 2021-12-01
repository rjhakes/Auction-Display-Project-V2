using System;
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
        private readonly ILogger<BuyerController> _logger;
        public BuyerController(IBuyerBL buyerBL)
        {
            _buyerBL = buyerBL;
        }
        // public BuyerController(ILogger<BuyerController> logger)
        // {
        //     _logger = logger;
        // }

        // GET: api/<BuyerController>
        [HttpGet]
        public async Task<IActionResult> GetBuyersAsync()
        {
            return Ok(await _buyerBL.GetBuyersAsync());
        }

        // GET: api/<BuyerController>/5
        [HttpGet("{id}")]
        [Produces("application/json")]
        public async Task<IActionResult> GetBuyerByIdAsync(int id)
        {
            var buyer = await _buyerBL.GetBuyerByIdAsync(id);
            if (buyer == null) return NotFound();
            return Ok(buyer);
        }

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
                return StatusCode(400);
            }
        }

        // Put: api/<BuyerController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateBuyerAsync(int Id, [FromBody] Buyer buyer)
        {
            try
            {
                await _buyerBL.AddBuyerAsync(buyer);
                return NoContent();
            }
            catch
            {
                return StatusCode(500);
            }
        }

        // DELETE api/<BuyerController>/5
        [HttpDelete("{Id}")]
        public async Task<IActionResult> DeleteBuyerAsync(int Id)
        {
            try
            {
                await _buyerBL.DeleteBuyerAsync(await _buyerBL.GetBuyerByIDAsync(Id));
                return NoContent();
            }
            catch
            {
                return StatusCode(500);
            }
        }
    }
}