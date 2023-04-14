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
            a.saleNumber - b.saleNumber);
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

    createExhibitorList = async (exhibitors: Array<ExhibitorModel>) => {
        this.loading = true;
        this.loadingInitial = true;
        try {
            await agent.Exhibitors.createList(exhibitors);
            
            runInAction(() => {
                this.loading = false;
                this.loadingInitial = false;
            })
            this.loadExhibitors();
        } catch (error) {
            console.log(error);
            
            runInAction(() => {
                this.loading = false;
                this.loadingInitial = false;
            })
            this.loadExhibitors();
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
        this.loadingInitial = true;
        this.csvExport();
        try {
            await agent.Exhibitors.deleteAll(); //Array.from(this.exhibitorRegistry.values()));
            this.exhibitorRegistry = new Map<string, ExhibitorModel>();
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
        let csvExhibitor = e.split('\n');
        let exhibitorArr = new Array<ExhibitorModel>();
        for (let i = 1; i < csvExhibitor.length; i++) {
            line = csvExhibitor[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
            if (line[0] == '') {
                
            } else {
                this.selectedExhibitor = {
                    id: uuid(),
                    saleNumber: parseInt(line[0]),
                    name: line[1].replace(/["]+/g, ''),
                    tag: line[2],
                    species: line[3],
                    description: line[4],
                    checkInWeight: line[5],
                    clubName: line[2],
                    showClassName: line[3],
                    placing: line[4],
                    buyBack: line[5],
                }
                exhibitorArr.push(this.selectedExhibitor);
            }       
        }
        this.createExhibitorList(exhibitorArr);
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