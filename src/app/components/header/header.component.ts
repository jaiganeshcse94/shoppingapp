import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private _router: Router,){}
  @Output() togglecounterEvent = new EventEmitter<MouseEvent>();
  @Output() logoutterEvent = new EventEmitter<MouseEvent>();
  
  togglecounter(event: MouseEvent) {
    this.togglecounterEvent.emit(event);
    this._router.navigate(['/cart']);
  }

  logoutter(event: MouseEvent) {
  this.logoutterEvent.emit(event);
  }
}
