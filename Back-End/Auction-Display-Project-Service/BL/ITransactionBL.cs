using System;
using Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BL
{
    public interface ITransactionBL
    {
        Task<List<Transaction>> GetTransactionsAsync();
        Task<Transaction> AddTransactionAsync(Transaction newTransaction);
        Task<Transaction> GetTransactionByIdAsync(Guid id);
        Task<Transaction> DeleteTransactionAsync(Transaction transaction2BDeleted);
        Task<Transaction> UpdateTransactionAsync(Transaction transaction2BUpdated);
    }
}
