import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { BuyerModel } from "../Models/Buyer";
import {v4 as uuid} from 'uuid';

export default class BuyerStore {
    buyerRegistry = new Map<string, BuyerModel>();
    selectedBuyer: BuyerModel | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this)
    }

    get buyersByBidNum() {
        return Array.from(this.buyerRegistry.values()).sort((a,b) => 
            parseInt(a.bidderNumber) - parseInt(b.bidderNumber));
    }

    loadBuyers = async () => {
        this.loadingInitial = true;
        try {
            const buyers = await agent.Buyers.list();
            buyers.forEach(buyer => {
                this.setBuyer(buyer);
            })
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }

    loadBuyer = async (id: string) => {
        let buyer = this.getBuyer(id);
        if (buyer) {
            this.selectedBuyer = buyer;
        } else {
            this.loadingInitial = true;
            try {
                buyer = await agent.Buyers.details(id);
                this.setBuyer(buyer);
                this.selectedBuyer = buyer;
                this.setLoadingInitial(false);
            } catch (error) {
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    private setBuyer = (buyer: BuyerModel) => {
        this.buyerRegistry.set(buyer.id, buyer);
    }

    private getBuyer = (id: string) => {
        return this.buyerRegistry.get(id);
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    selectBuyer = (id: string) => {
        this.selectedBuyer = this.buyerRegistry.get(id);
    }

    cancelSelectedBuyer = () => {
        this.selectedBuyer = undefined;
    }

    openForm = (id?: string) => {
        id ? this.selectBuyer(id) : this.cancelSelectedBuyer();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createBuyer = async (buyer: BuyerModel) => {
        this.loading = true;
        buyer.id = uuid();
        try {
            await agent.Buyers.create(buyer);
            runInAction(() => {
                this.buyerRegistry.set(buyer.id, buyer);
                this.selectedBuyer = buyer;
                this.editMode = false;
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    } 

    updateBuyer = async (buyer: BuyerModel) => {
        this.loading = true;
        try {
            await agent.Buyers.update(buyer);
            runInAction(() => {
                this.buyerRegistry.set(buyer.id, buyer);
                this.selectedBuyer = buyer;
                this.editMode = false;
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    deleteBuyer = async (id: string) => {
        this.loading = true;
        try {
            await agent.Buyers.delete(id);
            runInAction(() => {
                this.buyerRegistry.delete(id);
                // if (this.selectedBuyer?.id === id) this.cancelSelectedBuyer();
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }
}