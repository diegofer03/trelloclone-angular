import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, inject } from '@angular/core';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { BehaviorSubject } from 'rxjs';
import { getCookie, removeCookie, setCookie } from 'typescript-cookie';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  cookieService = inject(SsrCookieService)

  saveToken(token: string){
    // this.cookieService.set('token', token, { expires: 2, path: '/' });
   setCookie('token',token, {expires: 365, path:'/'})
  }

  getToken(){
    // const token = this.cookieService.get('token')
    const token = getCookie('token')
    return token
  }

  removeToken(){
    // this.cookieService.delete('token')
    removeCookie('token')
  }

  saveRefreshToken(Refreshtoken: string){
    // this.cookieService.set('Refreshtoken', Refreshtoken, { expires: 2, path: '/' });
    setCookie('Refreshtoken',Refreshtoken, {expires: 365, path:'/'})
  }

  getRefreshToken(){
    // const token = this.cookieService.get('Refreshtoken')
    const token = getCookie('Refreshtoken')
    return token
  }

  removeRefreshToken(){
    // this.cookieService.delete('Refreshtoken')
    removeCookie('Refreshtoken')
  }

  isValid(){
    const token = getCookie('token')
    if(!token) return false
    const decodeToken = jwtDecode<JwtPayload>(token)
    if(decodeToken && decodeToken.exp){
      const tokenDate = new Date(0)
      tokenDate.setUTCSeconds(decodeToken.exp)
      const now = new Date()
      return tokenDate.getTime() > now.getTime()
    }
    return false
  }

  isRefreshValid(){
    const token = getCookie('Refreshtoken')
    if(!token) return false
    const decodeToken = jwtDecode<JwtPayload>(token)
    if(decodeToken && decodeToken.exp){
      const tokenDate = new Date(0)
      tokenDate.setUTCSeconds(decodeToken.exp)
      const now = new Date()
      return tokenDate.getTime() > now.getTime()
    }
    return false
  }
}
