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
                new Buyer
                {
                    BidderNumber = 3,
                    Name = "Bobby",
                    ContactName = "Robby",
                    Phone = "1238904567",
                    Email = "bobby@gmail.com",
                    LogoFile = "bobbyLogo.png",
                    Action = ""
                },
                new Buyer
                {
                    BidderNumber = 4,
                    Name = "Bobby",
                    ContactName = "Robby",
                    Phone = "1238904567",
                    Email = "bobby@gmail.com",
                    LogoFile = "bobbyLogo.png",
                    Action = ""
                },
                new Buyer
                {
                    BidderNumber = 5,
                    Name = "Bobby",
                    ContactName = "Robby",
                    Phone = "1238904567",
                    Email = "bobby@gmail.com",
                    LogoFile = "bobbyLogo.png",
                    Action = ""
                },
                new Buyer
                {
                    BidderNumber = 6,
                    Name = "Bobby",
                    ContactName = "Robby",
                    Phone = "1238904567",
                    Email = "bobby@gmail.com",
                    LogoFile = "bobbyLogo.png",
                    Action = ""
                },
                new Buyer
                {
                    BidderNumber = 7,
                    Name = "Bobby",
                    ContactName = "Robby",
                    Phone = "1238904567",
                    Email = "bobby@gmail.com",
                    LogoFile = "bobbyLogo.png",
                    Action = ""
                },
                new Buyer
                {
                    BidderNumber = 8,
                    Name = "Bobby",
                    ContactName = "Robby",
                    Phone = "1238904567",
                    Email = "bobby@gmail.com",
                    LogoFile = "bobbyLogo.png",
                    Action = ""
                },
                new Buyer
                {
                    BidderNumber = 9,
                    Name = "Bobby",
                    ContactName = "Robby",
                    Phone = "1238904567",
                    Email = "bobby@gmail.com",
                    LogoFile = "bobbyLogo.png",
                    Action = ""
                },
                new Buyer
                {
                    BidderNumber = 10,
                    Name = "Bobby",
                    ContactName = "Robby",
                    Phone = "1238904567",
                    Email = "bobby@gmail.com",
                    LogoFile = "bobbyLogo.png",
                    Action = ""
                },
                new Buyer
                {
                    BidderNumber = 11,
                    Name = "Bobby",
                    ContactName = "Robby",
                    Phone = "1238904567",
                    Email = "bobby@gmail.com",
                    LogoFile = "bobbyLogo.png",
                    Action = ""
                },
                new Buyer
                {
                    BidderNumber = 12,
                    Name = "Bobby",
                    ContactName = "Robby",
                    Phone = "1238904567",
                    Email = "bobby@gmail.com",
                    LogoFile = "bobbyLogo.png",
                    Action = ""
                },
                new Buyer
                {
                    BidderNumber = 13,
                    Name = "Bobby",
                    ContactName = "Robby",
                    Phone = "1238904567",
                    Email = "bobby@gmail.com",
                    LogoFile = "bobbyLogo.png",
                    Action = ""
                },
                new Buyer
                {
                    BidderNumber = 14,
                    Name = "Bobby",
                    ContactName = "Robby",
                    Phone = "1238904567",
                    Email = "bobby@gmail.com",
                    LogoFile = "bobbyLogo.png",
                    Action = ""
                },
                new Buyer
                {
                    BidderNumber = 15,
                    Name = "Bobby",
                    ContactName = "Robby",
                    Phone = "1238904567",
                    Email = "bobby@gmail.com",
                    LogoFile = "bobbyLogo.png",
                    Action = ""
                },
                new Buyer
                {
                    BidderNumber = 16,
                    Name = "Bobby",
                    ContactName = "Robby",
                    Phone = "1238904567",
                    Email = "bobby@gmail.com",
                    LogoFile = "bobbyLogo.png",
                    Action = ""
                },
                new Buyer
                {
                    BidderNumber = 17,
                    Name = "Bobby",
                    ContactName = "Robby",
                    Phone = "1238904567",
                    Email = "bobby@gmail.com",
                    LogoFile = "bobbyLogo.png",
                    Action = ""
                },
                new Buyer
                {
                    BidderNumber = 18,
                    Name = "Bobby",
                    ContactName = "Robby",
                    Phone = "1238904567",
                    Email = "bobby@gmail.com",
                    LogoFile = "bobbyLogo.png",
                    Action = ""
                },
                new Buyer
                {
                    BidderNumber = 19,
                    Name = "Bobby",
                    ContactName = "Robby",
                    Phone = "1238904567",
                    Email = "bobby@gmail.com",
                    LogoFile = "bobbyLogo.png",
                    Action = ""
                },
                new Buyer
                {
                    BidderNumber = 20,
                    Name = "Bobby",
                    ContactName = "Robby",
                    Phone = "1238904567",
                    Email = "bobby@gmail.com",
                    LogoFile = "bobbyLogo.png",
                    Action = ""
                },
                new Buyer
                {
                    BidderNumber = 21,
                    Name = "Bobby",
                    ContactName = "Robby",
                    Phone = "1238904567",
                    Email = "bobby@gmail.com",
                    LogoFile = "bobbyLogo.png",
                    Action = ""
                },
                new Buyer
                {
                    BidderNumber = 22,
                    Name = "Bobby",
                    ContactName = "Robby",
                    Phone = "1238904567",
                    Email = "bobby@gmail.com",
                    LogoFile = "bobbyLogo.png",
                    Action = ""
                },
                new Buyer
                {
                    BidderNumber = 23,
                    Name = "Bobby",
                    ContactName = "Robby",
                    Phone = "1238904567",
                    Email = "bobby@gmail.com",
                    LogoFile = "bobbyLogo.png",
                    Action = ""
                },
                new Buyer
                {
                    BidderNumber = 24,
                    Name = "Bobby",
                    ContactName = "Robby",
                    Phone = "1238904567",
                    Email = "bobby@gmail.com",
                    LogoFile = "bobbyLogo.png",
                    Action = ""
                },
                new Buyer
                {
                    BidderNumber = 25,
                    Name = "Bobby",
                    ContactName = "Robby",
                    Phone = "1238904567",
                    Email = "bobby@gmail.com",
                    LogoFile = "bobbyLogo.png",
                    Action = ""
                },
                new Buyer
                {
                    BidderNumber = 26,
                    Name = "Bobby",
                    ContactName = "Robby",
                    Phone = "1238904567",
                    Email = "bobby@gmail.com",
                    LogoFile = "bobbyLogo.png",
                    Action = ""
                },
                new Buyer
                {
                    BidderNumber = 27,
                    Name = "Bobby",
                    ContactName = "Robby",
                    Phone = "1238904567",
                    Email = "bobby@gmail.com",
                    LogoFile = "bobbyLogo.png",
                    Action = ""
                },
                new Buyer
                {
                    BidderNumber = 28,
                    Name = "Bobby",
                    ContactName = "Robby",
                    Phone = "1238904567",
                    Email = "bobby@gmail.com",
                    LogoFile = "bobbyLogo.png",
                    Action = ""
                },
                new Buyer
                {
                    BidderNumber = 29,
                    Name = "Bobby",
                    ContactName = "Robby",
                    Phone = "1238904567",
                    Email = "bobby@gmail.com",
                    LogoFile = "bobbyLogo.png",
                    Action = ""
                },
                new Buyer
                {
                    BidderNumber = 30,
                    Name = "Bobby",
                    ContactName = "Robby",
                    Phone = "1238904567",
                    Email = "bobby@gmail.com",
                    LogoFile = "bobbyLogo.png",
                    Action = ""
                },
                new Buyer
                {
                    BidderNumber = 31,
                    Name = "Bobby",
                    ContactName = "Robby",
                    Phone = "1238904567",
                    Email = "bobby@gmail.com",
                    LogoFile = "bobbyLogo.png",
                    Action = ""
                },
                new Buyer
                {
                    BidderNumber = 32,
                    Name = "Bobby",
                    ContactName = "Robby",
                    Phone = "1238904567",
                    Email = "bobby@gmail.com",
                    LogoFile = "bobbyLogo.png",
                    Action = ""
                },
                new Buyer
                {
                    BidderNumber = 33,
                    Name = "Bobby",
                    ContactName = "Robby",
                    Phone = "1238904567",
                    Email = "bobby@gmail.com",
                    LogoFile = "bobbyLogo.png",
                    Action = ""
                },
                new Buyer
                {
                    BidderNumber = 34,
                    Name = "Bobby",
                    ContactName = "Robby",
                    Phone = "1238904567",
                    Email = "bobby@gmail.com",
                    LogoFile = "bobbyLogo.png",
                    Action = ""
                },
                new Buyer
                {
                    BidderNumber = 35,
                    Name = "Bobby",
                    ContactName = "Robby",
                    Phone = "1238904567",
                    Email = "bobby@gmail.com",
                    LogoFile = "bobbyLogo.png",
                    Action = ""
                },
                new Buyer
                {
                    BidderNumber = 36,
                    Name = "Bobby",
                    ContactName = "Robby",
                    Phone = "1238904567",
                    Email = "bobby@gmail.com",
                    LogoFile = "bobbyLogo.png",
                    Action = ""
                }
                
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