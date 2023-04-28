import { Injectable } from '@angular/core';
import { Product } from '../product';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getdata() {
    return this.http.get<any>('assets/json/data.json')
    .toPromise()
    .then(res => <Product[]>res.data)
    .then(data => { return data; });
  }
}
