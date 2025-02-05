import { Component, Inject, signal} from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ListPageComponent } from '../../components/list-page/list-page.component';
import { AuthGuardService } from '../../services/auth-guard.service';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [HeaderComponent,ListPageComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  counter:any = signal(0);
  constructor(
    @Inject(DOCUMENT) public document: Document,
    private auth: AuthGuardService,private router: Router
  ) {
  }
  togglecounter($event:any){
    this.counter.set(this.counter() + 1);
    console.log(this.counter);
  }
  logoutter($event:any) {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
