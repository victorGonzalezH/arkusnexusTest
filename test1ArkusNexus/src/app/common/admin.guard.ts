import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService, StorageType } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router, private storageService: StorageService) {

  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const currentUserString = this.storageService.retrieve('currentUser', StorageType.Session);
      const currentUser = JSON.parse(currentUserString);
      console.log(currentUser);
      if (currentUser != null && currentUser != undefined && currentUser.roles != undefined && currentUser.roles.length > 0 &&
        currentUser.roles[0] === 'admin' ) {
        return true;
      }

      // El usuario no esta autenticado, asi que se redirecciona a la pagina que se indique el servicio utils
      this.router.navigate(['/notAuthorized'], { queryParams: { returnUrl: state.url }});
      return false;
  }
  
}
