using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using DL;
using Models;
namespace BL
{
    public class TransactionBL : ITransactionBL
    {
        private readonly ITransactionRepo _repo;
        public TransactionBL(ITransactionRepo repo)
        {
            _repo = repo;

        }
        public async Task<Transaction> AddTransactionAsync(Transaction newTransaction)
        {
            return await _repo.AddTransactionAsync(newTransaction);
        }

        public async Task<Transaction> DeleteTransactionAsync(Transaction transaction2BDeleted)
        {
            return await _repo.DeleteTransactionAsync(transaction2BDeleted);
        }

        public async Task<Transaction> GetTransactionByIdAsync(Guid id)
        {
            return await _repo.GetTransactionByIdAsync(id);
        }

        public async Task<List<Transaction>> GetTransactionsAsync()
        {
            return await _repo.GetTransactionsAsync();
        }

        public async Task<Transaction> UpdateTransactionAsync(Transaction transaction2BUpdated)
        {
            return await _repo.UpdateTransactionAsync(transaction2BUpdated);
        }
    }
}