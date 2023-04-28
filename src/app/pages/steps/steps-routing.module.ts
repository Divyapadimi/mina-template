import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router'
import { StepsModule } from 'primeng/steps';
import { ComponentsComponent } from '../components/components.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { PaymentComponent } from './payment/payment.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { SeatComponent } from './seat/seat.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{path:'',component:ComponentsComponent, children:[
				{path:'', redirectTo: 'personal', pathMatch: 'full'},
				{path: 'personal', component: PersonalInformationComponent},
				{path: 'confirmation', component: ConfirmationComponent},
				{path: 'seat', component: SeatComponent},
				{path: 'payment', component: PaymentComponent}
			]}
		])
	],
	exports: [
		RouterModule
	]
})
export class StepsDemoRoutingModule {}