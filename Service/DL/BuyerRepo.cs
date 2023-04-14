using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
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

        public async Task<List<Buyer>> AddBuyerListAsync(List<Buyer> newBuyers)
        {
            // Regex csvSplit = new Regex("(?:^|,)(\"(?:[^\"])*\"|[^,]*)");
            // Regex csvSplit = new Regex("/(\".*?\"|[^\",\\s]+)(?=\\s*,|\\s*$)/g", RegexOptions.Compiled);
            // var arr = str.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);

            foreach(Buyer b in newBuyers)
            {
                // string[] s = Regex.Split(b, csvSplit);
                // string[] s = csvSplit.Split(b);
                // string[] s = b.Split(',');
                // List<string> s = new List<string>();
                // string curr = null;
                // foreach (Match match in csvSplit.Matches(b))
                // {
                //     curr = match.Value;
                //     if (0 == curr.Length)
                //     {
                //         s.Add("");
                //     }
                //     s.Add(curr.TrimStart(','));
                // }

                // Buyer buyer = new Buyer();
                // buyer.BidderNumber = Int32.Parse(s[0]);
                // buyer.Name = s[1];
                // buyer.ContactName = s[2];
                // buyer.Phone = s[3];
                // buyer.Email = s[4];
                // buyer.LogoFile = s[5];
                await _context.Buyers.AddAsync(b);
                await _context.SaveChangesAsync();
            }
            return newBuyers;
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