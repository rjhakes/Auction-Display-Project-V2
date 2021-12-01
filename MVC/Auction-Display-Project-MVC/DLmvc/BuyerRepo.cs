using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Models;

namespace DL
{
    public class BuyerRepo : IBuyerRepo
    {
        private readonly DataContext _context;
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

        public  List<Buyer> GetBuyers()
        {
            return _context.Buyers
                .AsNoTracking()
                .Select(buyer => buyer)
                .ToList();
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