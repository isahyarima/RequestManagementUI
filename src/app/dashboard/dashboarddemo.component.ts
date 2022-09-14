import { Component, OnInit } from '@angular/core';
import { CarService } from '../demo/service/carservice';
import { EventService } from '../demo/service/eventservice';
import { Car } from '../demo/domain/car';
import { SelectItem } from 'primeng/primeng';
import { MenuItem } from 'primeng/primeng';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { BreadcrumbService } from 'src/app/shared/dashboard-layout/breadcrumb.service';

@Component({
    templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']


})
export class DashboardDemoComponent implements OnInit {

    //CHARTS
    lineData: any;

    barData: any;

    pieData: any;

    polarData: any;

    radarData: any;




    cities: SelectItem[];

    cars: Car[];

    cols: any[];

    chartData: any;

    events: any[];

    selectedCity: any;

    selectedCar: Car;

    items: MenuItem[];

    fullcalendarOptions: any;

    constructor(private carService: CarService, private eventService: EventService, private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'Dashboard', routerLink: ['/main/dashboard'] }
        ]);
    }

    ngOnInit() {
       
   
        this.eventService.getEvents().then(events => { this.events = events; });

        this.fullcalendarOptions = {
            plugins: [ dayGridPlugin, timeGridPlugin, interactionPlugin ],
            defaultDate: '2016-01-12',
            header: {
                right: 'prev,next, today',
                left: 'title'
            }
        };
    }
}
