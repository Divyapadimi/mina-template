import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccordionModule} from 'primeng/accordion';
import {NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import {SidebarModule} from 'primeng/sidebar';
import {CardModule} from 'primeng/card';
import {ChartModule} from 'primeng/chart';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CarouselModule } from 'primeng/carousel';
import { CheckboxModule } from 'primeng/checkbox';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { GMapModule } from 'primeng/gmap';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { RatingModule } from 'primeng/rating';
import { SliderModule } from 'primeng/slider';
import { StepsModule } from 'primeng/steps';
import { TimelineModule } from 'primeng/timeline';

@NgModule({
  declarations: [],
  imports: [
    
  ],
  exports:[
    CommonModule,
    AccordionModule,
    NgbDropdownModule,
    SidebarModule,
    CardModule,
    ChartModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    HttpClientModule,
    GMapModule,ButtonModule,
    RatingModule,
    CarouselModule,
    ProgressBarModule,
    CalendarModule,SliderModule,DialogModule,
    MultiSelectModule,ContextMenuModule,
    DropdownModule,InputTextModule,
    FileUploadModule,StepsModule,CheckboxModule,
    TimelineModule,

  ]
})
export class SharedModule { }
