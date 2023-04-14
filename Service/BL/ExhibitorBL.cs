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

        public async Task<TimeSpan> AddExhibitorListAsync(List<Exhibitor> newExhibitors)
        {
            return await _repo.AddExhibitorListAsync(newExhibitors);
        }

        public async Task<Exhibitor> DeleteExhibitorAsync(Exhibitor exhibitor2BDeleted)
        {
            return await _repo.DeleteExhibitorAsync(exhibitor2BDeleted);
        }

        public async Task<TimeSpan> DeleteExhibitorsAllAsync()
        {
            return await _repo.DeleteExhibitorsAllAsync();
        }

        public async Task<Exhibitor> GetExhibitorByIdAsync(Guid id)
        {
            return await _repo.GetExhibitorByIdAsync(id);
        }
        public async Task<Exhibitor> GetExhibitorBySNumAsync(int sNum)
        {
            return await _repo.GetExhibitorBySNumAsync(sNum);
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