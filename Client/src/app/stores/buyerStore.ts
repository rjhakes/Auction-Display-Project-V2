import { makeAutoObservable, runInAction } from "mobx";
// import { CSVReader } from "react-papaparse";
import { default as Papa } from "react-papaparse";
import agent from "../api/agent";
import { BuyerModel } from "../models/Buyer";
import {v4 as uuid} from 'uuid';
import { ChangeEvent } from "react";
// import sleep from '../api/sleep.js';

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

    deleteAllBuyers = async () => {
        this.loading = true;
        try {
            this.buyerRegistry.forEach(async buyer => {
                this.deleteBuyer(buyer.id);
            });
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    importBuyers = (e: File): string => {
        console.log(e)
        let reader = e.stream().getReader();
        let decoder = new TextDecoder('utf-8');
        reader?.read().then(function (result) {
            console.log(decoder.decode(result.value));
            return decoder.decode(result.value);
        })
        return "";
    }

    // implant csvImport into importBuyers????? 

    csvImport = async (e: FileList) => {
        let line: string[];
        let csvBuyer = this.importBuyers(e[0]);
        console.log(csvBuyer);
        let csvArr = csvBuyer.split('\n');
        for (let i = 1; i < csvArr.length; i++) {
            line = csvArr[i].split(',');
            // console.log(line);
            this.selectedBuyer = {
                id: "",
                bidderNumber: line[0],
                name: line[1],
                contactName: line[2],
                phone: line[3],
                email: line[4],
                logoFile: line[5],
                action: line[6]
            }
            console.log(this.selectedBuyer);
            this.createBuyer(this.selectedBuyer);
        }
    }

    

    exportBuyers = async () => {

    }
}
