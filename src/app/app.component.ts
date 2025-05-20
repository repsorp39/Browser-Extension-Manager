import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NgClass } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { ThemeManagerService } from './services/theme-manager.service';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    RouterOutlet,
    NgClass,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation:ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    public theme!:{ isDarkMode:boolean };
    constructor(private themeService:ThemeManagerService){};

  ngOnInit(): void {
      this.theme = this.themeService.getCurrentTheme();
  }

}
