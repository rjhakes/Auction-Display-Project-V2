using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using System.Text;
using Microsoft.EntityFrameworkCore;
using EFCore.BulkExtensions;
using Models;

namespace DL
{
    public class TransactionRepo : ITransactionRepo
    {
        private readonly DataContext _context;
        private DateTime _Start;
        private TimeSpan _TimeSpan;

        public TransactionRepo(DataContext context)
        {
            _context = context;

        }
        public async Task<Transaction> AddTransactionAsync(Transaction newTransaction)
        {
            await _context.Transactions.AddAsync(newTransaction);
            await _context.SaveChangesAsync();
            return newTransaction;
        }

        public async Task<TimeSpan> AddTransactionListAsync(List<Transaction> newTransactions)
        {
            _Start = DateTime.Now;
            await _context.BulkInsertAsync(newTransactions);
            _TimeSpan = DateTime.Now - _Start;
            return _TimeSpan;
        }

        public async Task<Transaction> DeleteTransactionAsync(Transaction transaction2BDeleted)
        {
            _context.Transactions.Remove(transaction2BDeleted);
            await _context.SaveChangesAsync();
            return transaction2BDeleted;
        }

        public async Task<TimeSpan> DeleteTransactionsAllAsync()
        {
            _Start = DateTime.Now;
            List<Transaction> transactions = new();
            transactions = _context.Transactions.ToList();
            await _context.BulkDeleteAsync(transactions);
            _TimeSpan = DateTime.Now - _Start;
            return _TimeSpan;
        }

        public async Task<Transaction> GetTransactionByIdAsync(Guid id)
        {
            return await _context.Transactions
                .AsNoTracking()
                .FirstOrDefaultAsync(transaction => transaction.Id == id);
        }
        public async Task<Transaction> GetTransactionByBSNumAsync(int saleN, int bidN)
        {
            return await _context.Transactions
                .AsNoTracking()
                .FirstOrDefaultAsync(transaction => transaction.SaleNumber == saleN && transaction.BidderNumber == bidN);
        }

        public async Task<List<Transaction>> GetTransactionsAsync()
        {
            return await _context.Transactions
                .AsNoTracking()
                .Select(transaction => transaction)
                .ToListAsync();
        }

        public async Task<Transaction> UpdateTransactionAsync(Transaction transaction2BUpdated)
        {
            Transaction oldTransaction = await _context.Transactions.Where(b => b.Id == transaction2BUpdated.Id).FirstOrDefaultAsync();
            _context.Entry(oldTransaction).CurrentValues.SetValues(transaction2BUpdated);
            await _context.SaveChangesAsync();
            _context.ChangeTracker.Clear();
            return oldTransaction;
        }
    }
}