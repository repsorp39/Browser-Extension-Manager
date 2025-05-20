import { Component, ViewEncapsulation } from '@angular/core';
import { ThemeManagerService } from '../services/theme-manager.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-header',
  imports: [
    NavbarComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class HeaderComponent {
    public theme!:{ isDarkMode:boolean };
    constructor(private themeService:ThemeManagerService){};
  
    ngOnInit(): void {
        this.theme = this.themeService.getCurrentTheme();
    }

    toogleTheme(){
      this.themeService.toogleTheme();
    }
} 
