import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { ExhibitorModel } from "../Models/Exhibitor";
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

    get exhibitorsByBidNum() {
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
}