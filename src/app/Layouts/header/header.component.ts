import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navbarOpen:boolean=false;
  visibleSidebar2 =false;
List =[
  {
    number : '1',
    name:'Dashboard',
    icon : 'pi pi-home',
    routing:'/Dashboard'
  },
  {
    number : '2',
    name:'Apps',
    icon : 'pi pi-th-large',
    routing:'/Apps'
  },
  {
    number : '3',
    name:'Authentication',
    icon : 'pi pi-users',
    routing:'/Dashboard'
  },
  {
    number : '4',
    name:'Pages',
    icon : 'fa fa-file-text-o',
    routing:'/pages'
  },
  {
    number : '5',
    name:'Horizontal',
    icon : 'pi pi-home',
    routing:'/Dashboard'
  }
]

Elements=[
  {
    number : '1',
    name:'Components',
    icon : ' pi pi-briefcase',
    routing:'/components'
  },
 
  {
    number : '2',
    name:'Forms',
    icon : 'pi pi-box',
    routing:'/forms'
  },
  {
    number : '3',
    name:'File Upload',
    icon : ' pi pi-cloud-upload',
    routing:'/file-upload'
  },
  {
    number : '4',
    name:'Tables',
    icon : 'pi pi-table',
    routing:'/table'
  },
  {
    number : '5',
    name:'Charts',
    icon : 'pi pi-chart-pie ',
    routing:'/charts'
  },

  {
    number : '7',
    name:'Maps',
    icon : 'pi pi-map',
    routing:'/Dashboard'
  }
]

countries =[
  {
    img:'assets/images/us.jpg',
    name:'English'
  },
  {
    img:'assets/images/germany.jpg',
    name:'Germany'
  },
  {
    img:'assets/images/italy.jpg',
    name:'Italy'
  },
  {
    img:'assets/images/russia.jpg',
    name:'Russia'
  },
  {
    img:'assets/images/spain.jpg',
    name:'Spain'
  },
]

websites =[
  {
    img:'assets/images/github.png',
    name:'GitHub'
  },
  {
    img:'assets/images/bitbucket.png',
    name:'BitBuket'
  },
  {
    img:'assets/images/dribbble.png',
    name:'Drribbble'
  }
]
websites1=[
  {
    img:'assets/images/dropbox.png',
    name:'Drop Box'
  },
  {
    img:'assets/images/mail_chimp.png',
    name:'Mail Chimp'
  },
  {
    img:'assets/images/slack.png',
    name:'Slack'
  }
]




  constructor(private route:Router,
    private router:ActivatedRoute ) { }

  ngOnInit(){
  }
  
  toggleNavbar(){
    this.navbarOpen=!this.navbarOpen;
  }
  
}
