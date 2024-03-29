﻿using System;
using Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BL
{
    public interface IBuyerBL
    {
        Task<List<Buyer>> GetBuyersAsync();
        Task<Buyer> AddBuyerAsync(Buyer newBuyer);
        Task<TimeSpan> AddBuyerListAsync(List<Buyer> newBuyers);
        Task<Buyer> GetBuyerByIdAsync(Guid id);
        Task<Buyer> GetBuyerByBNumAsync(int bNum);
        Task<Buyer> DeleteBuyerAsync(Buyer buyer2BDeleted);
        Task<TimeSpan> DeleteBuyersAllAsync();
        Task<Buyer> UpdateBuyerAsync(Buyer buyer2BUpdated);
    }
}
