import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent {

  constructor(private router:Router){}

  data = [
    { id: 1, name: 'Laptop', price: '₹50,000', quantity: 10 },
    { id: 2, name: 'Smartphone', price: '₹30,000', quantity: 5 },
    { id: 3, name: 'Headphones', price: '₹2,000', quantity: 15 },
    { id: 4, name: 'Smart TV', price: '₹70,000', quantity: 8 },
    { id: 5, name: 'Fitness Tracker', price: '₹3,500', quantity: 20 },
    { id: 6, name: 'Coffee Maker', price: '₹2,500', quantity: 12 },
    { id: 7, name: 'Gaming Console', price: '₹35,000', quantity: 6 },
    { id: 8, name: 'Wireless Earbuds', price: '₹4,000', quantity: 18 },
    { id: 9, name: 'Air Purifier', price: '₹15,000', quantity: 7 },
    { id: 10, name: 'DSLR Camera', price: '₹60,000', quantity: 3 },
    { id: 11, name: 'Smart Watch', price: '₹8,000', quantity: 14 },
    { id: 12, name: 'Bluetooth Speaker', price: '₹2,500', quantity: 22 }

  ];

  displayedColumns: string[] = ['no', 'name', 'price', 'quantity'];

  logout() {
    
    this.router.navigateByUrl('login');
  }

}
