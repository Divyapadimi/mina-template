import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layouts/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './Layouts/sidebar/sidebar.component';
import { ProductService } from './Services/product.service';
import { CustomerService } from './Services/customer.service';
import { ResuableFormComponent } from './shared/resuable-form/resuable-form.component';
import { ResuableInputComponent } from './shared/resuable-input/resuable-input.component';
import { MessageService } from 'primeng/api';
import { PersonalInformationComponent } from './pages/steps/personal-information/personal-information.component';
import { SeatComponent } from './pages/steps/seat/seat.component';
import { PaymentComponent } from './pages/steps/payment/payment.component';
import { ConfirmationComponent } from './pages/steps/confirmation/confirmation.component';
import { SharedModule } from './shared/shared/shared.module';
import { myRoutings } from './app-routing.module';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid';
import { TableComponent } from './pages/table/table.component';
import { FooterComponent } from './Layouts/footer/footer.component'; 


FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  
]);

@NgModule({
  declarations: [
    myRoutings,
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ConfirmationComponent,
    PaymentComponent,
    SeatComponent,
    PersonalInformationComponent,
    ResuableFormComponent,
    ResuableInputComponent,
    TableComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    SharedModule,FullCalendarModule

  ],
  providers: [ProductService,CustomerService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
