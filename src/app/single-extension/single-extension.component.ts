import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Extension } from './models/extension.model';
import { ExtensionService } from '../services/extensions-service';

@Component({
  selector: 'app-single-extension',
  imports: [],
  templateUrl: './single-extension.component.html',
  styleUrl: './single-extension.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class SingleExtensionComponent {
  @Input() extension!:Extension;
  @Input() updateList!:()=>void;

  constructor(private extensionService:ExtensionService){}

  handleToogle(){
    this.extensionService.toogleExtensionActiveMode(this.extension.id);
  }

  handleDeletion(){
     this.extensionService.removeExtension(this.extension.id);
     this.updateList();
  }

}
