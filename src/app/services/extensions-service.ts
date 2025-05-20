import { Injectable } from "@angular/core";
import extensionsList from "../single-extension/models/extension.data.json";
import { Extension } from "../single-extension/models/extension.model";
import { extensionFilter } from "../single-extension/models/extension-filter.type";


@Injectable({ providedIn:'root'})
export class ExtensionService{
    private extensions!:Extension[];
    constructor(){
        this.extensions = extensionsList;
    }

    getExtensions(filter:extensionFilter):Extension[]{
        if(filter === "all") return [...this.extensions];
        else if(filter === "active") return this.extensions.filter((extension) => extension.isActive) ;
        else{
            return this.extensions.filter((extension) => !extension.isActive);
        }
    }

    toogleExtensionActiveMode(extensionId:number):void{
        const foundExtension = this.extensions.find((extension) => extension.id === extensionId);
        if(foundExtension){
            foundExtension.isActive = !foundExtension.isActive;
        } 
    }

    removeExtension(extensionId:number):void{
        this.extensions = this.extensions.filter((extension) => extension.id !== extensionId);
    }
}