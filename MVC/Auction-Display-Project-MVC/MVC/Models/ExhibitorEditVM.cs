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
    public class ExhibitorEditVM
    {
        [DisplayName("Sale #")]
        [Required]
        public int SaleNumber { get; set; }
        [DisplayName("Full Name")]
        [Required]
        public string Name { get; set; }
        [DisplayName("Tag")]
        public string Tag { get; set; }
        [DisplayName("Species")]
        [Required]
        public string Species { get; set; }
        [DisplayName("Description")]
        public string Description { get; set; }
        [DisplayName("Check-in Weight")]
        [Required]
        public string CheckInWeight { get; set; }
        [DisplayName("Club Name")]
        public string ClubName { get; set; }
        [DisplayName("Show Class Name")]
        public string ShowClassName { get; set; }
        [DisplayName("Placing")]
        public string Placing { get; set; }
        [DisplayName("Buy Back")]
        public string BuyBack { get; set; }
        [DisplayName("Aciton")]
        public string Action { get; set; }
        public Guid Id { get; set; }
    }
}