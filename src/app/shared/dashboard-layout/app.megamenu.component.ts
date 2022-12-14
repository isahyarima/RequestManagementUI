import { Component } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import { AppLayoutComponent } from '../app-layout/app-layout/app-layout.component';

@Component({
    selector: 'app-megamenu',
    templateUrl: './app.megamenu.component.html',
    animations: [
        trigger('children', [
            state('hiddenAnimated', style({
                height: '0px'
            })),
            state('visibleAnimated', style({
                height: '*'
            })),
            transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class AppMegamenuComponent {

    constructor(public app: AppLayoutComponent) {}

}
