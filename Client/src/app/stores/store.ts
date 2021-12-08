import { createContext, useContext } from "react";
import BuyerStore from "./buyerStore";

interface Store {
    buyerStore: BuyerStore;
}

export const store: Store = {
    buyerStore: new BuyerStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}