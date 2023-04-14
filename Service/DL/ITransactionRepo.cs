using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Models;

namespace DL
{
    public interface ITransactionRepo
    {
        Task<Transaction> AddTransactionAsync(Transaction newTransaction);
        Task<TimeSpan> AddTransactionListAsync(List<Transaction> newTransactions);
        Task<Transaction> DeleteTransactionAsync(Transaction transaction2BDeleted);
        Task<TimeSpan> DeleteTransactionsAllAsync();
        Task<Transaction> GetTransactionByIdAsync(Guid id);
        Task<Transaction> GetTransactionByBSNumAsync(int saleN, int bidN);
        Task<List<Transaction>> GetTransactionsAsync();
        Task<Transaction> UpdateTransactionAsync(Transaction transaction2BUpdated);
    }
}