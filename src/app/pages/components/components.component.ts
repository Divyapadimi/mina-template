import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/Services/product.service';
import { TicketService } from 'src/app/Services/ticket.service';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {
  items!: MenuItem[];
  products!: Product[];
  displayBasic!: boolean;

  subscription!: Subscription;
	responsiveOptions;
  constructor(private productService: ProductService,
    public messageService: MessageService,private  ticketService: TicketService ) {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
   }

  ngOnInit() {

    this.productService.getdata().then(products => {
			this.products = products;
		});

    this.items = [{
      label: 'Personal',
      routerLink: 'personal'
  },
  {
      label: 'Seat',
      routerLink: 'seat'
  },
  {
      label: 'Payment',
      routerLink: 'payment'
  },
  {
      label: 'Confirmation',
      routerLink: 'confirmation'
  }
];

this.subscription = this.ticketService.paymentComplete$.subscribe((personalInformation) =>{
  this.messageService.add({severity:'success', summary:'Order submitted', detail: 'Dear, ' + personalInformation.firstname + ' ' + personalInformation.lastname + ' your order completed.'});
});

  }

  ngOnDestroy() {
    if (this.subscription) {
        this.subscription.unsubscribe();
    }
}



showBasicDialog() {
  this.displayBasic = true;
}


}
