import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { getCookie, removeCookie, setCookie } from 'typescript-cookie';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  saveToken(token: string){
   setCookie('token',token, {expires: 365, path:'/'})
  }

  getToken(){
    const token = getCookie('token',{})
    return token
  }

  removeToken(){
    removeCookie('token')
  }

  saveRefreshToken(Refreshtoken: string){
    setCookie('Refreshtoken',Refreshtoken, {expires: 365, path:'/'})
  }

  getRefreshToken(){
    const token = getCookie('Refreshtoken')
    return token
  }

  removeRefreshToken(){
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
      console.log('refresh valid',tokenDate.getTime() > now.getTime())
      return tokenDate.getTime() > now.getTime()
    }
    return false
  }
}
