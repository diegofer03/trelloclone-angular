import { ScrollingModule } from '@angular/cdk/scrolling';
import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/app.models';

@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [ScrollingModule, NavbarComponent, CommonModule, HttpClientModule],
  templateUrl: './scroll.component.html'
})
export class ScrollComponent {
  private http = inject(HttpClient)

  // constructor(private http : HttpClient){

  // }

  products : Product[] = []
  ngOnInit(){
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe(data => {
      this.products = data;
    })
  }
}
