import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../../services/auth-guard.service';
import { FormBuilder, FormGroup, Validators,FormControl,ReactiveFormsModule } from '@angular/forms';
import { InputFocusDirective } from '../../directives/input.focus.directive';

@Component({
  selector: 'app-simple-from',
  imports: [InputFocusDirective,ReactiveFormsModule],
  templateUrl: './simple-from.component.html',
  styleUrl: './simple-from.component.scss'
})
export class SimpleFromComponent {
  constructor(private auth: AuthGuardService, private router: Router,private fb: FormBuilder) {}
  userForm = new FormGroup({
    mobileNo: new FormControl("",[Validators.required, Validators.pattern('^[6-9]{1}[0-9]{9}$'),Validators.minLength(10),Validators.maxLength(10)]),
    pincode: new FormControl("",[Validators.required, Validators.pattern('^[6-9]{1}[0-9]{5}$'), Validators.minLength(6),Validators.maxLength(6)]),
  });
  ngOnInit(){
  }
  login() {
    this.auth.login(this.userForm.value.mobileNo!);
    this.router.navigate(['/dashboard']);
  }
}
