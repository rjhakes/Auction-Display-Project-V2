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

    // sort
    get buyersByBidNum() {
        return Array.from(this.buyerRegistry.values()).sort((a,b) => 
            a.bidderNumber - b.bidderNumber);
            // parseInt(a.bidderNumber) - parseInt(b.bidderNumber));
    }

    loadBuyers = async () => {
        this.setLoadingInitial(true);
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

    createBuyerList = async (buyers: Array<BuyerModel>) => {
        this.loading = true;
        this.loadingInitial = true;
        try {
            await agent.Buyers.createList(buyers);
            
            runInAction(() => {
                this.loading = false;
                this.loadingInitial = false;
            })
            this.loadBuyers();
        } catch (error) {
            console.log(error);
            
            runInAction(() => {
                this.loading = false;
                this.loadingInitial = false;
            })
            this.loadBuyers();
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
        this.loadingInitial = true;
        this.csvExport();
        try {
            await agent.Buyers.deleteAll(); //Array.from(this.buyerRegistry.values()));
            this.buyerRegistry = new Map<string, BuyerModel>();
            runInAction(() => {
                this.loading = false;
                this.loadingInitial = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
                this.loadingInitial = false;
            })
        }
    }

    csvImport = async (e: string) => {
        let line: string[];
        let csvBuyer = e.split('\n');
        let buyerArr = new Array<BuyerModel>();
        for (let i = 1; i < csvBuyer.length; i++) {
            line = csvBuyer[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
            if (line[0] == '') {
                
            } else {
                this.selectedBuyer = {
                    id: uuid(),
                    bidderNumber: parseInt(line[0]),
                    name: line[1].replace(/["]+/g, ''),
                    contactName: line[2],
                    phone: line[3],
                    email: line[4],
                    logoFile: line[5],
                }
                buyerArr.push(this.selectedBuyer);
            }       
        }
        this.createBuyerList(buyerArr);
    }

    csvExport = async () => {
        const csvRows = [];
        csvRows.push("bidderNumber,name,contactName,phone,email,logoFileName,")
        this.buyerRegistry.forEach(element => {
            const values = [];
            values.push(element.bidderNumber);
            if(element.name.includes(',')) {
                element.name = '"' + element.name + '"';
            }
            values.push(element.name);
            values.push(element.contactName);
            values.push(element.phone);
            values.push(element.email);
            values.push(element.logoFile);
            csvRows.push(values.join(','));
        });
        const csvData = csvRows.join('\n');
        const blob = new Blob([csvData], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.setAttribute('hidden', '')
        a.setAttribute('href', url)
        a.setAttribute('download', 'buyerData.csv')
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
    }
}
