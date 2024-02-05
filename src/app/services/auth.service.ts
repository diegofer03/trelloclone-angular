import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { enviroment } from '../../enviroments/enviroment';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { SessionService } from './session.service';
import { User } from '../models/app.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient)
  private sessionService = inject(SessionService)
  private apiUrl = enviroment.API_URL
  user$ = new BehaviorSubject< User | null>(null)

  constructor() { }

  login(email: string, password: string){
    return this.http.post(`${this.apiUrl}api/v1/auth/login`, {
      email,
      password
    }).pipe(
      tap((response:any) => {
        this.sessionService.saveToken(response.access_token)
        this.sessionService.saveRefreshToken(response.refresh_token)
      })
    );
  }

  refreshToken(refreshToken: string) {
    console.log('llamo')
    return this.http.post(`${this.apiUrl}api/v1/auth/refresh-token`, {refreshToken})
    .pipe(
      tap((response:any) => {
        this.sessionService.saveToken(response.access_token)
        this.sessionService.saveRefreshToken(response.refresh_token)
      })
    );
  }

  register(email: string, name: string, password: string){
    return this.http.post(`${this.apiUrl}api/v1/auth/register`, {
      email,
      password,
      name
    });
  }

  registerAndLogin(email: string, name: string, password: string) {
    return this.register(email, name, password)
    .pipe(
      switchMap(() => this.login(email, password))
    );
  }

  isAvailable(email: string){
    return this.http.post(`${this.apiUrl}api/v1/auth/is-available`, {
      email
    });
  }

  recovery(email: string){
    return this.http.post(`${this.apiUrl}api/v1/auth/recovery`, {
      email
    });
  }

  profile(){
    const token = this.sessionService.getToken()
    return this.http.get(`${this.apiUrl}api/v1/auth/profile`).pipe(
      tap((response:any) => {
        this.user$.next(response)
      })
    )
  }

  changePassword(token: string, newPassword: string) {
    return this.http.post(`${this.apiUrl}api/v1/auth/change-password`, { token, newPassword });
  }

  logout(){
    this.sessionService.removeToken()
    this.sessionService.removeRefreshToken()
  }
}
