import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionUserService } from '../../services/sessionUser/session-user.service';
import { AuthService } from 'app/core/services/auth/auth.service';
import { Router } from '@angular/router';
import { User } from 'app/core/interfaces/user.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isLogged$: Observable<boolean> = this.sessionUserService.isLogged$();

  public user!: User | null;

  public displayMenu = false;

  constructor(
    private sessionUserService: SessionUserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData(): void {
    this.sessionUserService.getUser$().subscribe(user => {
      if (user) {
        this.user = user;
      }
    });
  }

  public logout() {
    this.sessionUserService.logout();
    this.router.navigate(['/']);
  }
}
