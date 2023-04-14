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
        Task<TimeSpan> AddTransactionListAsync(List<Transaction> newTransactions);
        Task<Transaction> GetTransactionByIdAsync(Guid id);
        Task<Transaction> GetTransactionByBSNumAsync(int saleN, int bidN);
        Task<Transaction> DeleteTransactionAsync(Transaction transaction2BDeleted);
        Task<TimeSpan> DeleteTransactionsAllAsync();
        Task<Transaction> UpdateTransactionAsync(Transaction transaction2BUpdated);
    }
}
