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
    public class TransactionController : ControllerBase
    {
        private readonly ITransactionBL _transactionBL;
        private readonly ILogger<TransactionController> _logger;
        public TransactionController(ITransactionBL transactionBL)
        {
            _transactionBL = transactionBL;
        }
        // public TransactionController(ILogger<TransactionController> logger)
        // {
        //     _logger = logger;
        // }

        // GET: api/<TransactionController>
        [HttpGet]
        public async Task<IActionResult> GetTransactionsAsync()
        {
            return Ok(await _transactionBL.GetTransactionsAsync());
        }
        // GET: api/<TransactionController>/5
        [HttpGet("{id}")]
        [Produces("application/json")]
        public async Task<IActionResult> GetTransactionByIdAsync(Guid id)
        {
            var transaction = await _transactionBL.GetTransactionByIdAsync(id);
            if (transaction == null) return NotFound();
            return Ok(transaction);
        }
        

        // POST: api/<TransactionController>
        [HttpPost]
        [Consumes("application/json")]
        public async Task<IActionResult> AddTransactionAsync([FromBody] Transaction transaction)
        {
            try
            {
                await _transactionBL.AddTransactionAsync(transaction);
                return CreatedAtAction("AddTransaction", transaction);
            }
            catch (Exception e)
            {
                return StatusCode(400);
            }
        }

        // Put: api/<TransactionController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTransactionAsync(Guid id, [FromBody] Transaction transaction)
        {
            try
            {
                await _transactionBL.UpdateTransactionAsync(transaction);
                return NoContent();
            }
            catch
            {
                return StatusCode(500);
            }
        }

        // DELETE api/<TransactionController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTransactionAsync(Guid id)
        {
            try
            {
                await _transactionBL.DeleteTransactionAsync(await _transactionBL.GetTransactionByIdAsync(id));
                return NoContent();
            }
            catch
            {
                return StatusCode(500);
            }
        }

        // GET: api/<TransactionController>/5
        // [HttpGet("{saleN}")]
        // [Produces("application/json")]
        // public async Task<IActionResult> GetTransactionByBSNumAsync(int saleN, int bidN)
        // {
        //     var transaction = await _transactionBL.GetTransactionByBSNumAsync(saleN, bidN);
        //     if (transaction == null) return NotFound();
        //     return Ok(transaction);
        // }

        // GET: api/<TransactionController/<email>
        // [HttpGet]
        // [Route("/api/Transaction/email/{transactionEmail}")]
        // [Produces("application/json")]
        // public async Task<IActionResult> GetTransactionByEmail(string transactionEmail)
        // {
        //     var transaction = await _transactionBL.GetTransactionByEmail(transactionEmail);
        //     if (transaction == null) return NotFound();
        //     return Ok(transaction);
        // }
    }
}