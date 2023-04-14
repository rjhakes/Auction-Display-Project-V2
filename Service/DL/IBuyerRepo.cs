using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Models;

namespace DL
{
    public interface IBuyerRepo
    {
        Task<Buyer> AddBuyerAsync(Buyer newBuyer);
        Task<TimeSpan> AddBuyerListAsync(List<Buyer> newBuyers);
        Task<Buyer> DeleteBuyerAsync(Buyer buyer2BDeleted);
        Task<TimeSpan> DeleteBuyersAllAsync();
        Task<Buyer> GetBuyerByIdAsync(Guid id);
        Task<Buyer> GetBuyerByBNumAsync(int bNum);
        Task<List<Buyer>> GetBuyersAsync();
        Task<Buyer> UpdateBuyerAsync(Buyer buyer2BUpdated);
    }
}