using Models;
using Microsoft.EntityFrameworkCore;

namespace DL
{
    public class DataContext : DbContext
    {
        public DataContext( DbContextOptions options) : base(options)
        {
            
        }

        public DbSet<Buyer> Buyers { get; set; }
        public DbSet<Exhibitor> Exhibitors { get; set; }
        public DbSet<Transaction> Transactions { get; set; }
    }
}
