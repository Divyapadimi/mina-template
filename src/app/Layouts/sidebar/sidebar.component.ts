import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  navbarOpen:boolean=false;
  constructor(private route:Router,
    private router:ActivatedRoute) { }

  ngOnInit(): void {
  }
  toggleNavbar(){
    this.navbarOpen=!this.navbarOpen;
  }
  

}
