import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { getCookie, removeCookie, setCookie } from 'typescript-cookie';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  saveToken(token: string){
    setCookie('token',token, {expires: 365, path:'/login'})
  }

  getToken(){
    return getCookie('token')
  }

  removeToken(){
    removeCookie('token')
  }
}
