import { Component } from '@angular/core';
import { SimpleFromComponent } from '../../components/simple-from/simple-from.component';
@Component({
  selector: 'app-login',
  imports: [SimpleFromComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
}
