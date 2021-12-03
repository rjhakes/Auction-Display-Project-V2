using System;

namespace Models
{
    public class Exhibitor
    {
        public Guid Id { get; set; }
        public int SaleNumber { get; set; }
        public string Name { get; set; }
        public string Tag { get; set; }
        public string Species { get; set; }
        public string Description { get; set; }
        public string CheckInWeight { get; set; }
        public string ClubName { get; set; }
        public string ShowClassName { get; set; }
        public string Placing { get; set; }
        public string BuyBack { get; set; }
        public string Action { get; set; }
    }
}
