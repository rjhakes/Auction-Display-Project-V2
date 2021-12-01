using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MVC.Models
{
    public class TransactionCRVM
    {
        [DisplayName("Sale #")]
        [Required]
        public int SaleNumber { get; set; }
        [DisplayName("Bidder #")]
        [Required]
        public int BidderNumber { get; set; }
        [DisplayName("Purchase Amount")]
        [Required]
        public string PurchaseAmount { get; set; }
        [DisplayName("Processor")]
        public string Processor { get; set; }
        [DisplayName("Action")]
        public string Action { get; set; }
    }
}