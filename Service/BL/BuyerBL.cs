using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using DL;
using Models;
namespace BL
{
    public class BuyerBL : IBuyerBL
    {
        private readonly IBuyerRepo _repo;
        public BuyerBL(IBuyerRepo repo)
        {
            _repo = repo;

        }
        public async Task<Buyer> AddBuyerAsync(Buyer newBuyer)
        {
            return await _repo.AddBuyerAsync(newBuyer);
        }

        public async Task<TimeSpan> AddBuyerListAsync(List<Buyer> newBuyers)
        {
            return await _repo.AddBuyerListAsync(newBuyers);
        }

        public async Task<Buyer> DeleteBuyerAsync(Buyer buyer2BDeleted)
        {
            return await _repo.DeleteBuyerAsync(buyer2BDeleted);
        }

        public async Task<TimeSpan> DeleteBuyersAllAsync()
        {
            return await _repo.DeleteBuyersAllAsync();
        }

        public async Task<Buyer> GetBuyerByIdAsync(Guid id)
        {
            return await _repo.GetBuyerByIdAsync(id);
        }
        public async Task<Buyer> GetBuyerByBNumAsync(int bNum)
        {
            return await _repo.GetBuyerByBNumAsync(bNum);
        }

        public async Task<List<Buyer>> GetBuyersAsync()
        {
            return await _repo.GetBuyersAsync();
        }

        public async Task<Buyer> UpdateBuyerAsync(Buyer buyer2BUpdated)
        {
            return await _repo.UpdateBuyerAsync(buyer2BUpdated);
        }
    }
}