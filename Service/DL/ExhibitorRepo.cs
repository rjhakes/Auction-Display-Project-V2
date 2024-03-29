using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using System.Text;
using Microsoft.EntityFrameworkCore;
using EFCore.BulkExtensions;
using Models;

namespace DL
{
    public class ExhibitorRepo : IExhibitorRepo
    {
        private readonly DataContext _context;
        private DateTime _Start;
        private TimeSpan _TimeSpan;

        public ExhibitorRepo(DataContext context)
        {
            _context = context;

        }
        public async Task<Exhibitor> AddExhibitorAsync(Exhibitor newExhibitor)
        {
            await _context.Exhibitors.AddAsync(newExhibitor);
            await _context.SaveChangesAsync();
            return newExhibitor;
        }

        public async Task<TimeSpan> AddExhibitorListAsync(List<Exhibitor> newExhibitors)
        {
            _Start = DateTime.Now;
            await _context.BulkInsertAsync(newExhibitors);
            _TimeSpan = DateTime.Now - _Start;
            return _TimeSpan;
        }

        public async Task<Exhibitor> DeleteExhibitorAsync(Exhibitor exhibitor2BDeleted)
        {
            _context.Exhibitors.Remove(exhibitor2BDeleted);
            await _context.SaveChangesAsync();
            return exhibitor2BDeleted;
        }

        public async Task<TimeSpan> DeleteExhibitorsAllAsync()
        {
            _Start = DateTime.Now;
            List<Exhibitor> exhibitors = new();
            exhibitors = _context.Exhibitors.ToList();
            await _context.BulkDeleteAsync(exhibitors);
            _TimeSpan = DateTime.Now - _Start;
            return _TimeSpan;
        }

        public async Task<Exhibitor> GetExhibitorByIdAsync(Guid id)
        {
            return await _context.Exhibitors
                .AsNoTracking()
                .FirstOrDefaultAsync(exhibitor => exhibitor.Id == id);
        }
        public async Task<Exhibitor> GetExhibitorBySNumAsync(int sNum)
        {
            return await _context.Exhibitors
                .AsNoTracking()
                .FirstOrDefaultAsync(exhibitor => exhibitor.SaleNumber == sNum);
        }

        public async Task<List<Exhibitor>> GetExhibitorsAsync()
        {
            return await _context.Exhibitors
                .AsNoTracking()
                .Select(exhibitor => exhibitor)
                .ToListAsync();
        }

        public async Task<Exhibitor> UpdateExhibitorAsync(Exhibitor exhibitor2BUpdated)
        {
            Exhibitor oldExhibitor = await _context.Exhibitors.Where(b => b.Id == exhibitor2BUpdated.Id).FirstOrDefaultAsync();
            _context.Entry(oldExhibitor).CurrentValues.SetValues(exhibitor2BUpdated);
            await _context.SaveChangesAsync();
            _context.ChangeTracker.Clear();
            return oldExhibitor;
        }
    }
}