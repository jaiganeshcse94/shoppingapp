import { Component } from '@angular/core';
import { ProductDataService } from '../../services/product-data.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-list-page',
  imports: [],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.scss'
})
export class ListPageComponent {
product: any;
subscription: Subscription = new Subscription();
constructor (private data:ProductDataService){}
 ngOnInit(){
  this.fetchdata();
 }
 fetchdata(){
  this.subscription=this.data.getMethod().subscribe((data) => {
    console.log(data.products);
    this.product=data.products;
  });
  console.log(this.subscription);
 }

 ngOnDestroy() {
  // Unsubscribe to avoid memory leaks
  if (this.subscription) {
    this.subscription.unsubscribe();
  }
}

}
