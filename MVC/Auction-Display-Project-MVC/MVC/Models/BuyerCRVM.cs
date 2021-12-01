using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MVC.Models
{
    public class BuyerCRVM
    {
        [DisplayName("Bidder #")]
        [Required]
        public int BidderNumber { get; set; }
        [DisplayName("Name")]
        [Required]
        public string Name { get; set; }
        [DisplayName("Contact Name")]
        public string ContactName { get; set; }
        [DisplayName("Phone")]
        [Required]
        [Phone]
        public string Phone { get; set; }
        [DisplayName("Email")]
        [EmailAddress]
        public string Email { get; set; }
        [DisplayName("Logo File")]
        public string LogoFile { get; set; }
        [DisplayName("Action")]
        public string Action { get; set; }
    }
}