import {AfterViewInit, Component, Renderer2, ViewChild, ChangeDetectionStrategy} from '@angular/core';
import {ScrollPanel} from 'primeng/primeng';
//import * as jquery from 'jquery';
//window['jQuery'] = jquery;
//window['$'] = jquery;

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-root',
    template:`<ngx-spinner bdColor="rgba(51, 51, 51, 0.8)" size="default" type="ball-spin-clockwise">  
    <p style="color: white">Loading.. Please Wait. </p>  
    </ngx-spinner><router-outlet></router-outlet>`,
    styleUrls: ['./app.component.css']
 })
export class AppComponent {
    resetMenu: boolean;
    overlayMenuActive: boolean;
    staticMenuMobileActive: boolean;
    isHorizontal() {
        throw new Error("Method not implemented.");
    }
   megaMenuMode: string;
    profileMode: string;
    layoutMode: string;
    menuMode: string;
    menuHoverActive: boolean;
    layoutMenuScrollerViewChild: any;

   constructor(){}
}
