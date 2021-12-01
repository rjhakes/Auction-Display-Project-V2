using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using Models;
using System.ComponentModel;

namespace MVC.Models
{
    public class TransactionEditVM
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
        public Guid Id { get; set; }
    }
}