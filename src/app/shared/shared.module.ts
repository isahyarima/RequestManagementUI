import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";
import { TableModule } from "primeng/components/table/table";
import { ToastModule } from "primeng/components/toast/toast";
import { DataViewModule } from "primeng/dataview";
import { FullCalendarModule } from "primeng/fullcalendar";
import { AccordionModule, AutoCompleteModule, BreadcrumbModule, ButtonModule, CalendarModule, 
  CardModule, CarouselModule, ChartModule, CheckboxModule, ChipsModule, CodeHighlighterModule, 
  ColorPickerModule, ConfirmDialogModule, ContextMenuModule, DialogModule, DropdownModule,
   EditorModule, FieldsetModule, FileUploadModule, GalleriaModule, GrowlModule, 
   InplaceModule, InputMaskModule, InputSwitchModule, InputTextareaModule, InputTextModule, 
   LightboxModule, ListboxModule, MegaMenuModule, MenubarModule, MenuModule, MessageModule, 
   MessagesModule, MultiSelectModule, OrderListModule, OrganizationChartModule, 
   OverlayPanelModule, PaginatorModule, PanelMenuModule, PanelModule, PasswordModule, 
   PickListModule, ProgressBarModule, RadioButtonModule, RatingModule, ScrollPanelModule, 
   SelectButtonModule, SlideMenuModule, SliderModule, SpinnerModule, SplitButtonModule, 
   StepsModule, TabMenuModule, TabViewModule, TerminalModule, TieredMenuModule, 
   ToggleButtonModule, ToolbarModule, TooltipModule, TreeModule, TreeTableModule } from "primeng/primeng";
import { VirtualScrollerModule } from "primeng/virtualscroller";
import { FileUploadComponent } from "./component/file-upload/file-upload.component";
import { LogoUploadComponent } from './component/logo-upload/logo-upload.component';

@NgModule({
    declarations: [ FileUploadComponent, LogoUploadComponent
      ],
    imports: [
      CommonModule,
      //AuthenticationRoutingModule,
      FormsModule,
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
      NgxSpinnerModule
    ],
    exports:[FileUploadComponent,LogoUploadComponent]
  })
  export class SharedModule { }