import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { ExhibitorModel } from "../models/Exhibitor";
import {v4 as uuid} from 'uuid';

export default class ExhibitorStore {
    exhibitorRegistry = new Map<string, ExhibitorModel>();
    selectedExhibitor: ExhibitorModel | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this)
    }

    get exhibitorsBySaleNum() {
        return Array.from(this.exhibitorRegistry.values()).sort((a,b) => 
            parseInt(a.saleNumber) - parseInt(b.saleNumber));
    }

    loadExhibitors = async () => {
        this.loadingInitial = true;
        try {
            const exhibitors = await agent.Exhibitors.list();
            exhibitors.forEach(exhibitor => {
                this.setExhibitor(exhibitor);
            })
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }

    loadExhibitor = async (id: string) => {
        let exhibitor = this.getExhibitor(id);
        if (exhibitor) {
            this.selectedExhibitor = exhibitor;
        } else {
            this.loadingInitial = true;
            try {
                exhibitor = await agent.Exhibitors.details(id);
                this.setExhibitor(exhibitor);
                this.selectedExhibitor = exhibitor;
                this.setLoadingInitial(false);
            } catch (error) {
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    private setExhibitor = (exhibitor: ExhibitorModel) => {
        this.exhibitorRegistry.set(exhibitor.id, exhibitor);
    }

    private getExhibitor = (id: string) => {
        return this.exhibitorRegistry.get(id);
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    selectExhibitor = (id: string) => {
        this.selectedExhibitor = this.exhibitorRegistry.get(id);
    }

    cancelSelectedExhibitor = () => {
        this.selectedExhibitor = undefined;
    }

    openForm = (id?: string) => {
        id ? this.selectExhibitor(id) : this.cancelSelectedExhibitor();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createExhibitor = async (exhibitor: ExhibitorModel) => {
        this.loading = true;
        exhibitor.id = uuid();
        try {
            await agent.Exhibitors.create(exhibitor);
            runInAction(() => {
                this.exhibitorRegistry.set(exhibitor.id, exhibitor);
                this.selectedExhibitor = exhibitor;
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

    updateExhibitor = async (exhibitor: ExhibitorModel) => {
        this.loading = true;
        try {
            await agent.Exhibitors.update(exhibitor);
            runInAction(() => {
                this.exhibitorRegistry.set(exhibitor.id, exhibitor);
                this.selectedExhibitor = exhibitor;
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

    deleteExhibitor = async (id: string) => {
        this.loading = true;
        try {
            await agent.Exhibitors.delete(id);
            runInAction(() => {
                this.exhibitorRegistry.delete(id);
                // if (this.selectedExhibitor?.id === id) this.cancelSelectedExhibitor();
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    deleteAllExhibitors = async () => {
        this.loading = true;
        try {
            this.exhibitorRegistry.forEach(async exhibitor => {
                this.deleteExhibitor(exhibitor.id);
            });
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    csvImport = async (e: FileList) => {
        let line: string[];
        let csvBuyer = "";
        setTimeout(() => {
            let csvArr = csvBuyer.split('\n');
            for (let i = 1; i < csvArr.length; i++) {
                line = csvArr[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
                this.selectedExhibitor = {
                    id: "",
                    saleNumber: line[0],
                    name: line[1],
                    tag: line[2],
                    species: line[3],
                    description: line[4],
                    checkInWeight: line[5],
                    clubName: line[6],
                    showClassName: line[7],
                    placing: line[8],
                    buyBack: line[9],
                }
                this.createExhibitor(this.selectedExhibitor);
            }
        }, 0);  
        let reader = e[0].stream().getReader();
        let decoder = new TextDecoder('utf-8');
        reader?.read().then(function (result) {
            csvBuyer = decoder.decode(result.value);
        })
        
    }

    csvExport = async () => {
        const csvRows = [];
        csvRows.push("saleNumber,fullName,tag,species,animalDescription,checkInWeight,clubName,showClassName,placing,buyback")
        this.exhibitorRegistry.forEach(element => {
            const values = [];
            values.push(element.saleNumber);
            values.push(element.name);
            values.push(element.tag);
            values.push(element.species);
            values.push(element.description);
            values.push(element.checkInWeight);
            values.push(element.clubName);
            values.push(element.showClassName);
            values.push(element.placing);
            values.push(element.buyBack);
            csvRows.push(values.join(','));
        });
        const csvData = csvRows.join('\n');
        const blob = new Blob([csvData], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.setAttribute('hidden', '')
        a.setAttribute('href', url)
        a.setAttribute('download', 'exhibitorData.csv')
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
    }
}