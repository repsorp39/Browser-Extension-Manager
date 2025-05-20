import { Injectable } from "@angular/core";

@Injectable({ providedIn:'root'})
export class ThemeManagerService {
    private theme = { isDarkMode:true } ;

    constructor() {
        const storedTheme = localStorage.getItem("theme-mode");
        if(storedTheme){
            this.theme.isDarkMode = storedTheme === "Dark";
        }else{
            this.theme.isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches;
            this.saveTheme();
        }
    }

    toogleTheme():void{
        this.theme.isDarkMode = !this.theme.isDarkMode;
        this.saveTheme();
    }

    saveTheme():void{
        localStorage.setItem("theme-mode",this.theme.isDarkMode?"Dark":"Light");
    }

    getCurrentTheme(){
        return this.theme;
    }
} 