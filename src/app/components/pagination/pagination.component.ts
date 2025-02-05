import { Component, HostListener,Output, EventEmitter,Input } from '@angular/core';
import { PaginationService } from '../../services/pagination.service';
import { selectBoxHide, selectBoxInput, selectBoxOption } from '../../utilities/selectBox.utilities';
import { NgScrollbarModule } from "ngx-scrollbar";
@Component({
  selector: 'app-pagination',
  imports: [NgScrollbarModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  @Input() totalItems: number = 5; // Total number of items, can be passed as an input
  itemsPerPage: number = 5; // Number of items per page, can be passed as an input
  @Output() paginationData: EventEmitter<any> = new EventEmitter<any>();

  currentOffset: number = 0;
  hasPreviousPage: boolean = false;
  hasNextPage: boolean = false;
  dots = '...';

  currentPage: number = 1;
  totalPages: number = 1;
  pages: number[] = [];
  @Output() sendDataToParent = new EventEmitter<string>();  // Event emitter to send data to parent

  @HostListener("click") onDocumentClick() {
    selectBoxHide("show");
    }

  constructor (private paginationService: PaginationService) {}  
     // Update the current page and regenerate the pages list
     ngOnChanges() {
      this.setTotalPages();
      this.updatePagination();
     }
     handler__selectInput($event: any) {
      selectBoxInput($event);
      }
      handler__selectBox($event: any) {
      $event.stopImmediatePropagation();
      }
      handler__selectOption($event: any,value:any) {
      selectBoxOption($event);
      this.sendDataToParent.emit(value);
      }

  // Generate the list of page numbers to be displayed
  generatePages(): void {
    let pageNumbers: any[] = [];
    for (var i = 1; i <= this.totalPages; i++) {
      if (i == this.currentPage || i == (this.currentPage - 1) || i == (this.currentPage + 1) || i == 1 || i == this.totalPages) {
        pageNumbers.push(i);
      } else if (i == (this.currentPage - 2) || i == (this.currentPage + 2)) {
        pageNumbers.push(this.dots)
      }
  }
    this.hasNextPage = (this.currentPage < this.totalPages);
    this.hasPreviousPage = (this.currentPage > 1)
    this.pages = pageNumbers;
  }

  goNextPage() 
  {
    this.currentPage++;
    if (this.currentPage >= this.totalPages) {
      this.currentPage = this.totalPages
    }
    this.getPage(this.currentPage);
  }

  setTotalPages() {
     this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage)
  }

  goPreviousPage() 
  {
    this.currentPage--
    if (this.currentPage <= 1) {
      this.currentPage = 1;
    }
    this.getPage(this.currentPage);
  }

  getPage(pageNumber: any = 1) {
    if (pageNumber == this.dots) {
      return;
    }
    this.currentPage = pageNumber;
    let startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.generatePages();
    this.paginationData.emit({startIndex: startIndex, endIndex: (startIndex + this.itemsPerPage)});
  }

  setItemPerPage(limit: number) 
  {
    this.itemsPerPage = limit;
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.getPage()
  }

  getItemPerPageMessage() {
    return this.itemsPerPage + ' per page';
  }

  updatePagination() 
  {
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.generatePages();
    this.getPage();
  }
}

