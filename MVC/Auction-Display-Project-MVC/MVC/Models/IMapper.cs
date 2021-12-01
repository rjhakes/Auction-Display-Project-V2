using Models;
using System.Collections.Generic;
namespace MVC.Models
{
    public interface IMapper
    {
        // Buyer Mappers
        Buyer cast2Buyer(BuyerCRVM buyer2BCasted);
        BuyerIndexVM cast2BuyerIndexVM(Buyer buyer2BCasted);
        BuyerCRVM cast2BuyerCRVM(Buyer buyer);
        BuyerEditVM cast2BuyerEditVM(Buyer buyer);
        Buyer cast2Buyer(BuyerEditVM buyer2BCasted);

        // Exhibitor Mappers
        Exhibitor cast2Exhibitor(ExhibitorCRVM exhibitor2BCasted);
        ExhibitorIndexVM cast2ExhibitorIndexVM(Exhibitor exhibitor2BCasted);
        ExhibitorCRVM cast2ExhibitorCRVM(Exhibitor exhibitor);
        ExhibitorEditVM cast2ExhibitorEditVM(Exhibitor exhibitor);
        Exhibitor cast2Exhibitor(ExhibitorEditVM exhibitor2BCasted);

        // Transaction Mappers
        Transaction cast2Transaction(TransactionCRVM transaction2BCasted);
        TransactionIndexVM cast2TransactionIndexVM(Transaction transaction2BCasted);
        TransactionCRVM cast2TransactionCRVM(Transaction transaction);
        TransactionEditVM cast2TransactionEditVM(Transaction transaction);
        Transaction cast2Transaction(TransactionEditVM transaction2BCasted);
    }
}