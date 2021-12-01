using System;

namespace Models
{
    public class Buyer
    {
        public Guid Id { get; set; }
        public int BidderNumber { get; set; }
        public string Name { get; set; }
        public string ContactName { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string LogoFile { get; set; }
        public string Action { get; set; }
    }
}