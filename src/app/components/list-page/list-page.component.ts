import { Component, HostListener } from '@angular/core';
import { ProductDataService } from '../../services/product-data.service';
import { Subscription } from 'rxjs';
import { PaginationComponent } from '../pagination/pagination.component';
import { CommonModule } from '@angular/common';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { selectBoxHide, selectBoxInput, selectBoxOption } from '../../utilities/selectBox.utilities';
@Component({
  selector: 'app-list-page',
  imports: [PaginationComponent,CommonModule,NgScrollbarModule],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.scss'
})
export class ListPageComponent {
product: any;
subscription: Subscription = new Subscription();
startIndex: any = 0;
endIndex: any = 5;
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

setPaginationIndex(value: any) {
  this.startIndex = value.startIndex;
  this.endIndex = value.endIndex;
}

@HostListener("click") onDocumentClick() {
  selectBoxHide("show");
}
handler__selectInput($event: any) {
  selectBoxInput($event);
}
handler__selectBox($event: any) {
  $event.stopImmediatePropagation();
}
handler__selectOption($event: any) {
  selectBoxOption($event);
}

getQuantityRange(minQuantity: number): number[] {
  const range = [];
  for (let i = 1; i <= minQuantity; i++) {
    range.push(i);
  }
  return range;
}

}
