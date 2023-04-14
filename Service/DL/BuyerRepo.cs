using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using Microsoft.EntityFrameworkCore;
using EFCore.BulkExtensions;
using Models;

namespace DL
{
    public class BuyerRepo : IBuyerRepo
    {
        private readonly DataContext _context;
        private DateTime Start;
        private TimeSpan TimeSpan;

        public BuyerRepo(DataContext context)
        {
            _context = context;
        }
        public async Task<Buyer> AddBuyerAsync(Buyer newBuyer)
        {
            await _context.Buyers.AddAsync(newBuyer);
            await _context.SaveChangesAsync();
            return newBuyer;
        }

        // public async Task<List<Buyer>> AddBuyerListAsync(List<Buyer> newBuyers)
        public async Task<TimeSpan> AddBuyerListAsync(List<Buyer> newBuyers)
        {
            Start = DateTime.Now;
            await _context.BulkInsertAsync(newBuyers);
            // foreach(Buyer b in newBuyers)
            // {
            //     await _context.Buyers.AddAsync(b);
            // }
            await _context.SaveChangesAsync();
            TimeSpan = DateTime.Now - Start;
            // return newBuyers;
            return TimeSpan;
        }

        public async Task<Buyer> DeleteBuyerAsync(Buyer buyer2BDeleted)
        {
            _context.Buyers.Remove(buyer2BDeleted);
            await _context.SaveChangesAsync();
            return buyer2BDeleted;
        }

        public async Task<Buyer> GetBuyerByIdAsync(Guid id)
        {
            return await _context.Buyers
                .AsNoTracking()
                .FirstOrDefaultAsync(buyer => buyer.Id == id);
        }
        public async Task<Buyer> GetBuyerByBNumAsync(int bNum)
        {
            return await _context.Buyers
                .AsNoTracking()
                .FirstOrDefaultAsync(buyer => buyer.BidderNumber == bNum);
        }

        public async Task<List<Buyer>> GetBuyersAsync()
        {
            return await _context.Buyers
                .AsNoTracking()
                .Select(buyer => buyer)
                .ToListAsync();
        }

        public async Task<Buyer> UpdateBuyerAsync(Buyer buyer2BUpdated)
        {
            Buyer oldBuyer = await _context.Buyers.Where(b => b.Id == buyer2BUpdated.Id).FirstOrDefaultAsync();
            _context.Entry(oldBuyer).CurrentValues.SetValues(buyer2BUpdated);
            await _context.SaveChangesAsync();
            _context.ChangeTracker.Clear();
            return oldBuyer;
        }
    }
}