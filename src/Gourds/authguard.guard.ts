import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { Inject, inject } from '@angular/core';

export const authguardGuard: CanActivateFn = (route, state) => {
  return true;
};
