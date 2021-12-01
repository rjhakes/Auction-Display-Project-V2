using Models;

namespace MVC.Models
{
    public class Mapper : IMapper
    {
        public Buyer cast2Buyer(BuyerCRVM buyer2BCasted)
        {
            throw new System.NotImplementedException();
        }

        public Buyer cast2Buyer(BuyerEditVM buyer2BCasted)
        {
            throw new System.NotImplementedException();
        }

        public BuyerCRVM cast2BuyerCRVM(Buyer buyer)
        {
            throw new System.NotImplementedException();
        }

        public BuyerEditVM cast2BuyerEditVM(Buyer buyer)
        {
            throw new System.NotImplementedException();
        }

        public BuyerIndexVM cast2BuyerIndexVM(Buyer buyer2BCasted)
        {
            return new BuyerIndexVM
            {
                /*[DisplayName("Bidder #")]
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
                        public string Action { get; set; }*/
                BidderNumber = buyer2BCasted.BidderNumber,
                Name = buyer2BCasted.Name,
                ContactName = buyer2BCasted.ContactName,
                Phone = buyer2BCasted.Phone,
                Email = buyer2BCasted.Email,
                LogoFile = buyer2BCasted.LogoFile,
                Action = buyer2BCasted.Action
            };
        }

        public Exhibitor cast2Exhibitor(ExhibitorCRVM exhibitor2BCasted)
        {
            throw new System.NotImplementedException();
        }

        public Exhibitor cast2Exhibitor(ExhibitorEditVM exhibitor2BCasted)
        {
            throw new System.NotImplementedException();
        }

        public ExhibitorCRVM cast2ExhibitorCRVM(Exhibitor exhibitor)
        {
            throw new System.NotImplementedException();
        }

        public ExhibitorEditVM cast2ExhibitorEditVM(Exhibitor exhibitor)
        {
            throw new System.NotImplementedException();
        }

        public ExhibitorIndexVM cast2ExhibitorIndexVM(Exhibitor exhibitor2BCasted)
        {
            throw new System.NotImplementedException();
        }

        public Transaction cast2Transaction(TransactionCRVM transaction2BCasted)
        {
            throw new System.NotImplementedException();
        }

        public Transaction cast2Transaction(TransactionEditVM transaction2BCasted)
        {
            throw new System.NotImplementedException();
        }

        public TransactionCRVM cast2TransactionCRVM(Transaction transaction)
        {
            throw new System.NotImplementedException();
        }

        public TransactionEditVM cast2TransactionEditVM(Transaction transaction)
        {
            throw new System.NotImplementedException();
        }

        public TransactionIndexVM cast2TransactionIndexVM(Transaction transaction2BCasted)
        {
            throw new System.NotImplementedException();
        }
    }
}