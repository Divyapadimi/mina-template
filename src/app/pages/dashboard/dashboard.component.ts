import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/Services/product.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data: any;
  options: any;
  Amount:any
  chartOptions: any;
   google: any;

   products!: Product[];

   Trades=[
    {
      
    }
   ]

   responsiveOptions;
  constructor(private productService: ProductService) {
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

    this.data = {
      labels: ['A','B','C'],
      datasets: [
          {
              data: [100, 300, 50],
              backgroundColor: [
                  "rgba(119,122,202,1)",
                  "rgb(81, 86, 190)",
                  "#FFA726"
              ],
              hoverBackgroundColor: [
                  "#64B5F6",
                  "#81C784",
                  "#FFB74D"
              ]
          }
      ]
  };

  this.productService.getdata().then(products => {this.products = products;});

 
  }

}
