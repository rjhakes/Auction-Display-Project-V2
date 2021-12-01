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

        public async Task<Buyer> DeleteBuyerAsync(Buyer buyer2BDeleted)
        {
            return await _repo.DeleteBuyerAsync(buyer2BDeleted);
        }

        public async Task<Buyer> GetBuyerByIdAsync(Guid id)
        {
            return await _repo.GetBuyerByIdAsync(id);
        }

        public List<Buyer> GetBuyers()
        {
            return _repo.GetBuyers();
        }

        public async Task<Buyer> UpdateBuyerAsync(Buyer buyer2BUpdated)
        {
            return await _repo.UpdateBuyerAsync(buyer2BUpdated);
        }
    }
}