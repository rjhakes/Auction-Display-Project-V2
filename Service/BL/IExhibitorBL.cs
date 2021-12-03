using System;
using Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BL
{
    public interface IExhibitorBL
    {
        Task<List<Exhibitor>> GetExhibitorsAsync();
        Task<Exhibitor> AddExhibitorAsync(Exhibitor newExhibitor);
        Task<Exhibitor> GetExhibitorByIdAsync(Guid id);
        Task<Exhibitor> GetExhibitorBySNumAsync(int sNum);
        Task<Exhibitor> DeleteExhibitorAsync(Exhibitor exhibitor2BDeleted);
        Task<Exhibitor> UpdateExhibitorAsync(Exhibitor exhibitor2BUpdated);
    }
}
