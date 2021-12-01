using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Models;

namespace DL
{
    public interface IExhibitorRepo
    {
        Task<Exhibitor> AddExhibitorAsync(Exhibitor newExhibitor);
        Task<Exhibitor> DeleteExhibitorAsync(Exhibitor exhibitor2BDeleted);
        Task<Exhibitor> GetExhibitorByIdAsync(Guid id);
        Task<List<Exhibitor>> GetExhibitorsAsync();
        Task<Exhibitor> UpdateExhibitorAsync(Exhibitor exhibitor2BUpdated);
    }
}