using System;
using Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BL
{
    public interface IBuyerBL
    {
        List<Buyer> GetBuyers();
        Task<Buyer> AddBuyerAsync(Buyer newBuyer);
        Task<Buyer> GetBuyerByIdAsync(Guid id);
        Task<Buyer> DeleteBuyerAsync(Buyer buyer2BDeleted);
        Task<Buyer> UpdateBuyerAsync(Buyer buyer2BUpdated);
    }
}
