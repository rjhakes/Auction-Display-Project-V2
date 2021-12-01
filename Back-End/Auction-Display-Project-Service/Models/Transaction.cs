using System;

namespace Models
{
    public class Transaction
    {
        public Guid Id { get; set; }
        public int SaleNumber { get; set; }
        public int BidderNumber { get; set; }
        public string PurchaseAmount { get; set; }
        public string Processor { get; set; }
        public string Action { get; set; }
    }
}