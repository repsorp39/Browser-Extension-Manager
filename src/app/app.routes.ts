import { Routes } from '@angular/router';
import { ExtensionWrapperComponent } from './extension-wrapper/extension-wrapper.component';

export const routes: Routes = [
    { path:'',component:ExtensionWrapperComponent },
    { path:'active', component:ExtensionWrapperComponent },
    { path:'inactive',component:ExtensionWrapperComponent }
];
