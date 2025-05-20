import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Extension } from '../single-extension/models/extension.model';
import { ExtensionService } from '../services/extensions-service';
import { SingleExtensionComponent } from '../single-extension/single-extension.component';
import { Location } from '@angular/common';
import { extensionFilter } from '../single-extension/models/extension-filter.type';

@Component({
  selector: 'app-extension-wrapper',
  imports: [
    SingleExtensionComponent
  ],
  templateUrl: './extension-wrapper.component.html',
  styleUrl: './extension-wrapper.component.scss',
  encapsulation:ViewEncapsulation.None
})

export class ExtensionWrapperComponent implements OnInit {
  public extensions!:Extension[];
  constructor(
    private extensionService:ExtensionService,
    private location:Location
  ){};

  ngOnInit(): void {
    this.getExtensionList();
  }

  //using arrow function because even if this function is executed in a child class
  //it will still refer to the parent class instance
  getExtensionList = ()=>{
    let currentFilter = this.location.path()?.slice(1);//removing / from the  path;
    if(currentFilter === "") currentFilter="all";
    this.extensions = this.extensionService.getExtensions(currentFilter as extensionFilter);
  }

}
