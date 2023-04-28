import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService, SelectItem, SortEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { Customer, Representative } from 'src/app/customer';
import { Product } from 'src/app/product';
import { CustomerService } from 'src/app/Services/customer.service';
import { ProductService } from 'src/app/Services/product.service';
import { PrimeNGConfig } from 'primeng/api';
import { MenuItem } from 'primeng/api';




@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  providers: [MessageService],
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  products!: Product[];

  products1!: Product[];

  products2!: Product[];

  products3!: Product[];

  customers !: Customer[];

  selectedProducts!: Product[];

  exportColumns!: any[];

  statuses!: SelectItem[];

  clonedProducts: { [s: string]: Product; } = {};

  cols!: any[];

  sales!: any[];

  lastYearTotal !: number;

  thisYearTotal !: number;

  first = 0;

  rows1 = 10;

  representatives!: Representative[];

  qualifies!: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  selectedProduct1!: Product;

  selectedProduct2!: Product;

  selectedProduct3!: Product;

  selectedProducts1!: Product[];

  selectedProducts2!: Product[];

  selectedProducts3!: Product[];

  selectedProducts4!: Product[];

  selectedProducts5!: Product[];

  items!: MenuItem[];

  selectedProduct!: Product;


  @ViewChild('dt') table!: Table;


  rows = [
    {
      id: "1",
      FirstName: "Mark",
      LastName: "Otto",
      UserName: "@mdo"
    },
    {
      id: "2",
      FirstName: "Jacob",
      LastName: "Thornton",
      UserName: "@fat"
    },
    {
      id: "3",
      FirstName: "Larry",
      LastName: "the Bird",
      UserName: "@twitter"
    }
  ]
  columns = [
    {
      id: "1",
      ColumnHeading: "Column Content",
    },
    {
      id: "2",
      ColumnHeading: "Column Content",
    },
    {
      id: "3",
      ColumnHeading: "Column Content",
    },
    {
      id: "4",
      ColumnHeading: "Column Content",
    },
    {
      id: "5",
      ColumnHeading: "Column Content",
    }
  ]

  responsive = [
    {
      id: "1",
      Tablecontent: "Table Content",
    },
    {
      id: "2",
      Tablecontent: "Table Content",
    },
    {
      id: "3",
      Tablecontent: "Table Content",
    },
  ]
  
  constructor(private productService: ProductService,
    private customerService: CustomerService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig) {

      this.isRowSelectable = this.isRowSelectable.bind(this);

     }

  ngOnInit() {
    this.productService.getdata().then(products => { this.products = products; });
    this.productService.getdata().then(data => this.products1 = data);
    this.productService.getdata().then(data => this.products2 = data);
    this.productService.getdata().then(data => this.products3 = data);

    this.customerService.getCustomersLarge().then(customers => this.customers = customers);
   

    this.cols = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' }
    ];
    this.exportColumns = this.cols.map(col => ({ title: col.header, dataKey: col.field }));

    this.sales = [
      { product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342 },
      { product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122 },
      { product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500 },
      { product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 65323 },
      { product: 'Brown Purse', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332 },
      { product: 'Chakra Bracelet', lastYearSale: 52, thisYearSale: 65, lastYearProfit: 421132, thisYearProfit: 150005 },
      { product: 'Galaxy Earrings', lastYearSale: 82, thisYearSale: 12, lastYearProfit: 131211, thisYearProfit: 100214 },
      { product: 'Game Controller', lastYearSale: 44, thisYearSale: 45, lastYearProfit: 66442, thisYearProfit: 53322 },
      { product: 'Gaming Set', lastYearSale: 90, thisYearSale: 56, lastYearProfit: 765442, thisYearProfit: 296232 },
      { product: 'Gold Phone Case', lastYearSale: 75, thisYearSale: 54, lastYearProfit: 21212, thisYearProfit: 12533 }
    ];

    this.calculateLastYearTotal();
    this.calculateThisYearTotal();



    this.representatives = [
      {name: "Amy Elsner", image: 'amyelsner.png'},
      {name: "Anna Fali", image: 'annafali.png'},
      {name: "Asiya Javayant", image: 'asiyajavayant.png'},
      {name: "Bernardo Dominic", image: 'bernardodominic.png'},
      {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
      {name: "Ioni Bowcher", image: 'ionibowcher.png'},
      {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
      {name: "Onyama Limba", image: 'onyamalimba.png'},
      {name: "Stephen Shaw", image: 'stephenshaw.png'},
      {name: "Xuxue Feng", image: 'xuxuefeng.png'}
  ];

  this.qualifies = [
      {label: 'Unqualified', value: 'unqualified'},
      {label: 'Qualified', value: 'qualified'},
      {label: 'New', value: 'new'},
      {label: 'Negotiation', value: 'negotiation'},
      {label: 'Renewal', value: 'renewal'},
      {label: 'Proposal', value: 'proposal'}
  ]
  this.primengConfig.ripple = true;


  this.items = [
    {label: 'View', icon: 'pi pi-fw pi-search', command: () => this.viewProduct(this.selectedProduct)},
        {label: 'Delete', icon: 'pi pi-fw pi-times', command: () => this.deleteProduct(this.selectedProduct)}
];

  }


  calculateLastYearTotal() {
    let total = 0;
    for (let sale of this.sales) {
      total += sale.lastYearProfit;
    }

    this.lastYearTotal = total;
  }

  calculateThisYearTotal() {
    let total = 0;
    for (let sale of this.sales) {
      total += sale.thisYearProfit;
    }

    this.thisYearTotal = total;
  }



  next() {
    this.first = this.first + this.rows1;
  }

  prev() {
    this.first = this.first - this.rows1;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.customers ? this.first === (this.customers.length - this.rows1) : true;
  }

  isFirstPage(): boolean {
    return this.customers ? this.first === 0 : true;
  }


  customSort(event: any) {
    event.data.sort((data1: { [x: string]: any; }, data2: { [x: string]: any; }) => {
      let value1 = data1[event.field];
      let value2 = data2[event.field];
      let result = null;

      if (value1 == null && value2 != null)
        result = -1;
      else if (value1 != null && value2 == null)
        result = 1;
      else if (value1 == null && value2 == null)
        result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string')
        result = value1.localeCompare(value2);
      else
        result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

      return (event.order * result);
    });
  }
  clear(table: Table) {
    table.clear();
}
onActivityChange(event: { target: { value: any; }; }) {
  const value = event.target.value;
  if (value && value.trim().length) {
      const activity = parseInt(value);

      if (!isNaN(activity)) {
          this.table.filter(activity, 'activity', 'gte');
      }
  }
}

onDateSelect(value: any) {
  this.table.filter(this.formatDate(value), 'date', 'equals')
}

formatDate(date: { getMonth: () => number; getDate: () => any; getFullYear: () => string; }) {
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (month < 10) {
      month = 0 + month;
  }

  if (day < 10) {
      day = '0' + day;
  }

  return date.getFullYear() + '-' + month + '-' + day;
}

onRepresentativeChange(event: { value: any; }) {
  this.table.filter(event.value, 'representative', 'in')
}


selectProduct(product: Product) {
  this.messageService.add({severity:'info', summary:'Product Selected', detail: product.name});
}

onRowSelect(event: { data: { name: any; }; }) {
  this.messageService.add({severity:'info', summary:'Product Selected', detail: event.data.name});
}

onRowUnselect(event: { data: { name: any; }; }) {
  this.messageService.add({severity:'info', summary:'Product Unselected',  detail: event.data.name});
}

isRowSelectable(event: { data: any; }) {
  return !this.isOutOfStock(event.data);
}

isOutOfStock(data: { inventoryStatus: string; }) {
  return data.inventoryStatus === 'OUTOFSTOCK';
}

viewProduct(product: Product) {
  this.messageService.add({severity: 'info', summary: 'Product Selected', detail: product.name });
}

deleteProduct(product: Product) {
  this.products = this.products.filter((p) => p.id !== product.id);
  this.messageService.add({severity: 'info', summary: 'Product Deleted', detail: product.name});
  this.selectedProduct = this.selectedProduct;
}



}
