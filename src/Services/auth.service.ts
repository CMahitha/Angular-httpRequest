import { Injectable, importProvidersFrom } from '@angular/core';
import { truncate } from 'fs/promises';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn(){
    return true
  }

  constructor() { }
}
