using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Models;

namespace DL
{
    public interface ITransactionRepo
    {
        Task<Transaction> AddTransactionAsync(Transaction newTransaction);
        Task<Transaction> DeleteTransactionAsync(Transaction transaction2BDeleted);
        Task<Transaction> GetTransactionByIdAsync(Guid id);
        Task<List<Transaction>> GetTransactionsAsync();
        Task<Transaction> UpdateTransactionAsync(Transaction transaction2BUpdated);
    }
}