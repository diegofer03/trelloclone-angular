import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  saveToken(token: string){
    window.localStorage.setItem('token', token)
  }

  getToken(){
    return window.localStorage.getItem('token')
  }

  removeToken(){
    window.localStorage.removeItem('token')
  }
}
