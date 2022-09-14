import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER, Injector, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';

import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { FieldsetModule } from 'primeng/fieldset';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { GalleriaModule } from 'primeng/galleria';
import { GrowlModule } from 'primeng/growl';
import { InplaceModule } from 'primeng/inplace';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { LightboxModule } from 'primeng/lightbox';
import { ListboxModule } from 'primeng/listbox';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrderListModule } from 'primeng/orderlist';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { PickListModule } from 'primeng/picklist';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SliderModule } from 'primeng/slider';
import { SpinnerModule } from 'primeng/spinner';
import { SplitButtonModule } from 'primeng/splitbutton';
import { StepsModule } from 'primeng/steps';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TerminalModule } from 'primeng/terminal';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { AppComponent } from 'src/app/app.component';
import { AppMenuComponent, AppSubMenuComponent } from './shared/dashboard-layout/app.menu.component';
import { AppMegamenuComponent } from './shared/dashboard-layout/app.megamenu.component';
import { AppTopBarComponent } from './shared/dashboard-layout/app.topbar.component';
import { AppProfileComponent } from './shared/dashboard-layout/app.profile.component';
import { DashboardDemoComponent } from 'src/app/dashboard/dashboarddemo.component';
import { SampleDemoComponent } from 'src/app/demo/view/sampledemo.component';
import { FormsDemoComponent } from 'src/app/demo/view/formsdemo.component';
import { DataDemoComponent } from 'src/app/demo/view/datademo.component';
import { PanelsDemoComponent } from 'src/app/demo/view/panelsdemo.component';
import { OverlaysDemoComponent } from 'src/app/demo/view/overlaysdemo.component';
import { MenusDemoComponent } from 'src/app/demo/view/menusdemo.component';
import { MessagesDemoComponent } from 'src/app/demo/view/messagesdemo.component';
import { MiscDemoComponent } from 'src/app/demo/view/miscdemo.component';
import { ChartsDemoComponent } from 'src/app/demo/view/chartsdemo.component';
import { EmptyDemoComponent } from 'src/app/demo/view/emptydemo.component';
import { FileDemoComponent } from 'src/app/demo/view/filedemo.component';
import { DocumentationComponent } from 'src/app/demo/view/documentation.component';
import { CarService } from 'src/app/demo/service/carservice';
import { CountryService } from 'src/app/demo/service/countryservice';
import { EventService } from 'src/app/demo/service/eventservice';
import { NodeService } from 'src/app/demo/service/nodeservice';
import { BreadcrumbService } from './shared/dashboard-layout/breadcrumb.service';
import { AppRightPanelComponent } from './shared/dashboard-layout/app.rightpanel.component';
import { AppRoutes } from './app.routes';
import { AppBreadcrumbComponent } from './shared/dashboard-layout/app.breadcrumb.component';
import { AppFooterComponent } from './shared/dashboard-layout/app.footer.component';
import { AppLayoutComponent } from './shared/app-layout/app-layout/app-layout.component';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout/auth-layout.component';
import { AuthenticationService } from './authentication/authentication.service';
import { TokenInterceptorService } from './http/token-interceptor.service';
import { NgxSpinnerModule } from "ngx-spinner";
import { AuthGuardService } from './http/guards/auth-guard.service';
import { FileUploadModule } from 'primeng/primeng';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        AppRoutes,
        HttpClientModule,
        BrowserAnimationsModule,
        AccordionModule,
        AutoCompleteModule,
        BreadcrumbModule,
        ButtonModule,
        CalendarModule,
        CardModule,
        CarouselModule,
        ChartModule,
        CheckboxModule,
        ChipsModule,
        CodeHighlighterModule,
        ConfirmDialogModule,
        ColorPickerModule,
        ContextMenuModule,
        DataViewModule,
        DialogModule,
        DropdownModule,
        EditorModule,
        FieldsetModule,
        FileUploadModule,
        FullCalendarModule,
        GalleriaModule,
        GrowlModule,
        InplaceModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        LightboxModule,
        ListboxModule,
        MegaMenuModule,
        MenuModule,
        MenubarModule,
        MessageModule,
        MessagesModule,
        MultiSelectModule,
        OrderListModule,
        OrganizationChartModule,
        OverlayPanelModule,
        PaginatorModule,
        PanelModule,
        PanelMenuModule,
        PasswordModule,
        PickListModule,
        ProgressBarModule,
        RadioButtonModule,
        RatingModule,
        ScrollPanelModule,
        SelectButtonModule,
        SlideMenuModule,
        SliderModule,
        SpinnerModule,
        SplitButtonModule,
        StepsModule,
        TableModule,
        TabMenuModule,
        TabViewModule,
        TerminalModule,
        TieredMenuModule,
        ToastModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule,
        TreeModule,
        TreeTableModule,
        VirtualScrollerModule,
        ReactiveFormsModule,
        NgxSpinnerModule,
        

    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [
        AppComponent,
        AppRightPanelComponent,
        AppMenuComponent,
        AppSubMenuComponent,
        AppMegamenuComponent,
        AppBreadcrumbComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppProfileComponent,
        DashboardDemoComponent,
        SampleDemoComponent,
        FormsDemoComponent,
        DataDemoComponent,
        PanelsDemoComponent,
        OverlaysDemoComponent,
        MenusDemoComponent,
        MessagesDemoComponent,
        MessagesDemoComponent,
        MiscDemoComponent,
        ChartsDemoComponent,
        EmptyDemoComponent,
        FileDemoComponent,
        DocumentationComponent,
        AppLayoutComponent,
        AuthLayoutComponent,
        
        
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CarService, CountryService, EventService, NodeService, BreadcrumbService,
        AuthenticationService,
        AuthGuardService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptorService,
            multi: true
        },
        
      // {provide: ErrorHandler, useClass: GlobalErrorHandler},
        
        // {
        //     provide: APP_INITIALIZER,
        //     useFactory: init_app,
        //     deps: [Injector],
        //     multi: true,

        // },
        // {
        //     provide: ErrorHandler,
        //     useClass: GlobalErrorHandler,
        //     deps: [APP_INITIALIZER]
        // }
    ],
   
    bootstrap: [AppComponent],

    exports: []
})
export class AppModule {
}
