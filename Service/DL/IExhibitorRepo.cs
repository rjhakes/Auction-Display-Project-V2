using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Models;

namespace DL
{
    public interface IExhibitorRepo
    {
        Task<Exhibitor> AddExhibitorAsync(Exhibitor newExhibitor);
        Task<TimeSpan> AddExhibitorListAsync(List<Exhibitor> newExhibitors);
        Task<Exhibitor> DeleteExhibitorAsync(Exhibitor exhibitor2BDeleted);
        Task<TimeSpan> DeleteExhibitorsAllAsync();
        Task<Exhibitor> GetExhibitorByIdAsync(Guid id);
        Task<Exhibitor> GetExhibitorBySNumAsync(int sNum);
        Task<List<Exhibitor>> GetExhibitorsAsync();
        Task<Exhibitor> UpdateExhibitorAsync(Exhibitor exhibitor2BUpdated);
    }
}