import { Component, ViewContainerRef } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import {EShareDataService} from './e-shared/e-sharedata.service'
import { ComponentList } from './e-modules/e-dashboard/component-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public viewRef : ViewContainerRef,  private _iconRegistry: MatIconRegistry,private eShareDataService:EShareDataService) {
    this.loadIcons();
  }
  item:any;
  loadIcons(){
    this.item = ComponentList;
    console.log('This is icon Name'+this.item)
    for(var i = 0; i<=this.item.length; i++){

    }
    this._iconRegistry.addSvgIconSetInNamespace('core',
      this.eShareDataService.bypassURL('/assets/icons/app-icons.svg'));
}
}
