using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MVC.Models
{
    public class BuyerIndexVM
    {
        [DisplayName("Bidder #")]
        public int BidderNumber { get; set; }
        [DisplayName("Name")]
        public string Name { get; set; }
        [DisplayName("Contact Name")]
        public string ContactName { get; set; }
        [DisplayName("Phone")]
        public string Phone { get; set; }
        [DisplayName("Email")]
        public string Email { get; set; }
        [DisplayName("Logo File")]
        public string LogoFile { get; set; }
        [DisplayName("Action")]
        public string Action { get; set; }

    }
}