import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() togglecounterEvent = new EventEmitter<MouseEvent>();
  @Output() logoutterEvent = new EventEmitter<MouseEvent>();
  
  togglecounter(event: MouseEvent) {
    this.togglecounterEvent.emit(event);
  }

  logoutter(event: MouseEvent) {
  this.logoutterEvent.emit(event);
  }
}
