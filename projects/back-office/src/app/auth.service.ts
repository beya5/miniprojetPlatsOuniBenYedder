import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  login(adm: string, mdp: string): Observable<boolean> {
    let connected=adm==="admin" && mdp==="123123.";
    if(connected){
      localStorage.setItem('state', 'connected');
      }
      else{
        localStorage.setItem('state', 'disconnected');
      }
      return of(connected);
  }
  logout(){
    localStorage.setItem('state','disconnected');
      }

}
