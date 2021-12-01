using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using DL;
using Models;
namespace BL
{
    public class ExhibitorBL : IExhibitorBL
    {
        private readonly IExhibitorRepo _repo;
        public ExhibitorBL(IExhibitorRepo repo)
        {
            _repo = repo;

        }
        public async Task<Exhibitor> AddExhibitorAsync(Exhibitor newExhibitor)
        {
            return await _repo.AddExhibitorAsync(newExhibitor);
        }

        public async Task<Exhibitor> DeleteExhibitorAsync(Exhibitor exhibitor2BDeleted)
        {
            return await _repo.DeleteExhibitorAsync(exhibitor2BDeleted);
        }

        public async Task<Exhibitor> GetExhibitorByIdAsync(Guid id)
        {
            return await _repo.GetExhibitorByIdAsync(id);
        }

        public async Task<List<Exhibitor>> GetExhibitorsAsync()
        {
            return await _repo.GetExhibitorsAsync();
        }

        public async Task<Exhibitor> UpdateExhibitorAsync(Exhibitor exhibitor2BUpdated)
        {
            return await _repo.UpdateExhibitorAsync(exhibitor2BUpdated);
        }
    }
}