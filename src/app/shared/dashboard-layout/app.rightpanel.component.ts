import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {ScrollPanel} from 'primeng/primeng';
import { AppComponent } from 'src/app/app.component';
import { AppLayoutComponent } from '../app-layout/app-layout/app-layout.component';

@Component({
    selector: 'app-rightpanel',
    templateUrl: './app.rightpanel.component.html'
})
export class AppRightPanelComponent implements AfterViewInit {

    @ViewChild('scrollRightPanel', { static: true }) rightPanelMenuScrollerViewChild: ScrollPanel;

    constructor(public app: AppLayoutComponent) {}

    ngAfterViewInit() {
        setTimeout(() => {this.rightPanelMenuScrollerViewChild.moveBar(); }, 100);
    }

    onTabChange(event) {
        setTimeout(() => {this.rightPanelMenuScrollerViewChild.moveBar(); }, 450);
    }
}
