import { createContext, useContext } from "react";
import BuyerStore from "./buyerStore";
import ExhibitorStore from "./exhibitorStore";
import TransactionStore from "./transactionStore";

interface Store {
    buyerStore: BuyerStore;
    transactionStore: TransactionStore;
    exhibitorStore: ExhibitorStore;
}

export const store: Store = {
    buyerStore: new BuyerStore(),
    transactionStore: new TransactionStore(),
    exhibitorStore: new ExhibitorStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}