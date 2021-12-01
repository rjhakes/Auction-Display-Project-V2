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
    public class ExhibitorController : ControllerBase
    {
        private readonly IExhibitorBL _exhibitorBL;
        private readonly ILogger<ExhibitorController> _logger;
        public ExhibitorController(IExhibitorBL exhibitorBL)
        {
            _exhibitorBL = exhibitorBL;
        }
        // public ExhibitorController(ILogger<ExhibitorController> logger)
        // {
        //     _logger = logger;
        // }

        // GET: api/<ExhibitorController>
        [HttpGet]
        public async Task<IActionResult> GetExhibitorsAsync()
        {
            return Ok(await _exhibitorBL.GetExhibitorsAsync());
        }

        // GET: api/<ExhibitorController>/5
        [HttpGet("{id}")]
        [Produces("application/json")]
        public async Task<IActionResult> GetExhibitorByIdAsync(int id)
        {
            var exhibitor = await _exhibitorBL.GetExhibitorByIdAsync(id);
            if (exhibitor == null) return NotFound();
            return Ok(exhibitor);
        }

        // GET: api/<ExhibitorController/<email>
        // [HttpGet]
        // [Route("/api/Exhibitor/email/{exhibitorEmail}")]
        // [Produces("application/json")]
        // public async Task<IActionResult> GetExhibitorByEmail(string exhibitorEmail)
        // {
        //     var exhibitor = await _exhibitorBL.GetExhibitorByEmail(exhibitorEmail);
        //     if (exhibitor == null) return NotFound();
        //     return Ok(exhibitor);
        // }

        // POST: api/<ExhibitorController>
        [HttpPost]
        [Consumes("application/json")]
        public async Task<IActionResult> AddExhibitorAsync([FromBody] Exhibitor exhibitor)
        {
            try
            {
                await _exhibitorBL.AddExhibitorAsync(exhibitor);
                return CreatedAtAction("AddExhibitor", exhibitor);
            }
            catch (Exception e)
            {
                return StatusCode(400);
            }
        }

        // Put: api/<ExhibitorController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateExhibitorAsync(int Id, [FromBody] Exhibitor exhibitor)
        {
            try
            {
                await _exhibitorBL.AddExhibitorAsync(exhibitor);
                return NoContent();
            }
            catch
            {
                return StatusCode(500);
            }
        }

        // DELETE api/<ExhibitorController>/5
        [HttpDelete("{Id}")]
        public async Task<IActionResult> DeleteExhibitorAsync(int Id)
        {
            try
            {
                await _exhibitorBL.DeleteExhibitorAsync(await _exhibitorBL.GetExhibitorByIDAsync(Id));
                return NoContent();
            }
            catch
            {
                return StatusCode(500);
            }
        }
    }
}