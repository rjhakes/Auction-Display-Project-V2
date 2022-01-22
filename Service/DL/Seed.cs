using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Models;

namespace DL
{
    public class Seed
    {
        public static async Task SeedBuyerData(DataContext context)
        {
            if (context.Buyers.Any()) return;
            var buyers = new List<Buyer>
            {
                new Buyer
                {
                    BidderNumber = 1,
                    Name = "Timmy",
                    ContactName = "Jimmy",
                    Phone = "1234567890",
                    Email = "timmy@gmail.com",
                    LogoFile = "timmyLogo.png",
                    Action = ""
                },
                new Buyer
                {
                    BidderNumber = 2,
                    Name = "Bobby",
                    ContactName = "Robby",
                    Phone = "1238904567",
                    Email = "bobby@gmail.com",
                    LogoFile = "bobbyLogo.png",
                    Action = ""
                },
                
            };
            await context.Buyers.AddRangeAsync(buyers);
            await context.SaveChangesAsync();
        }

        public static async Task SeedExhibitorData(DataContext context)
        {
            if (context.Exhibitors.Any()) return;
            var exhibitors = new List<Exhibitor>
            {
                new Exhibitor
                {
                    SaleNumber = 1,
                    Name = "Tommy",
                    Tag = "",
                    Species = "Bovine",
                    Description = "Four Legs",
                    CheckInWeight = "250",
                    ClubName = "",
                    ShowClassName = "",
                    Placing = "",
                    BuyBack = "",
                    Action = "",
                },
                new Exhibitor
                {
                    SaleNumber = 2,
                    Name = "Ronny",
                    Tag = "",
                    Species = "Chicken",
                    Description = "Two Legs",
                    CheckInWeight = "2.50",
                    ClubName = "",
                    ShowClassName = "",
                    Placing = "",
                    BuyBack = "",
                    Action = "",
                },

            };
            await context.Exhibitors.AddRangeAsync(exhibitors);
            await context.SaveChangesAsync();
        }

        public static async Task SeedTransactionData(DataContext context)
        {
            if (context.Transactions.Any()) return;
            var transactions = new List<Transaction>
            {
                new Transaction
                {
                    SaleNumber = 1,
                    BidderNumber = 1,
                    PurchaseAmount = "1000",
                    Processor = "",
                    Action = "",
                },
                new Transaction
                {
                    SaleNumber = 2,
                    BidderNumber = 1,
                    PurchaseAmount = "30",
                    Processor = "",
                    Action = "",
                },
            };
            await context.Transactions.AddRangeAsync(transactions);
            await context.SaveChangesAsync();
        }
    }
}