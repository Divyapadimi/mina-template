import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {
  paymentInformation: any;
  constructor(private route:Router,
    private router:ActivatedRoute) { }

  ngOnInit(): void {
  }

  prevPage() {
    this.route.navigate(['/seat']);
}
nextPage(){

}


}
