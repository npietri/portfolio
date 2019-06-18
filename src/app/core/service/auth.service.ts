import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  redirectUrl: string;

  login(username: string): Observable<boolean> {
    localStorage.setItem('USER', username);
    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = true)
    );
  }
  isLogged() {
    return !!localStorage.getItem('USER');
  }

  logout(): void {
    localStorage.clear();
    this.isLoggedIn = false;
  }
}