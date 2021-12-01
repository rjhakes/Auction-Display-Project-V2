using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MVC.Models
{
    public class ExhibitorIndexVM
    {
        [DisplayName("Sale #")]
        public int SaleNumber { get; set; }
        [DisplayName("Full Name")]
        public string Name { get; set; }
        [DisplayName("Tag")]
        public string Tag { get; set; }
        [DisplayName("Species")]
        public string Species { get; set; }
        [DisplayName("Description")]
        public string Description { get; set; }
        [DisplayName("Check-in Weight")]
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
    }
}