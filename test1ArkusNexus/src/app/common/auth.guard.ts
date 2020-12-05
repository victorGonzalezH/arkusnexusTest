import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService, StorageType } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private storageService: StorageService) {

  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.storageService.retrieve('currentUser', StorageType.Session)) {
        return true;
      }

      // El usuario no esta autenticado, asi que se redirecciona a la pagina que se indique el servicio utils
      this.router.navigate(['login/'], { queryParams: { returnUrl: state.url }});
      return false;
  }

}
