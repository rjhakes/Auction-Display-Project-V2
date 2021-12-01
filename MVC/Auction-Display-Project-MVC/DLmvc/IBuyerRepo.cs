using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Models;

namespace DL
{
    public interface IBuyerRepo
    {
        Task<Buyer> AddBuyerAsync(Buyer newBuyer);
        Task<Buyer> DeleteBuyerAsync(Buyer buyer2BDeleted);
        Task<Buyer> GetBuyerByIdAsync(Guid id);
        List<Buyer> GetBuyers();
        Task<Buyer> UpdateBuyerAsync(Buyer buyer2BUpdated);
    }
}