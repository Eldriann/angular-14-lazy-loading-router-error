import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class StatusRedirectGuard implements CanActivate {
  public constructor(private router: Router) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<UrlTree | boolean> {
    /*
     Imagine that we make some async api calls here to check permissions / state of an object
     and that createUrlTree redirection depends on some status (which I didn't made here to simplify the project).
     This guard redirect if we are not on the valid status
     */
    const tree = this.router.createUrlTree(['lazy-loaded', 'status-valid']);
    if (tree.toString() === state.url) {
      return of(true);
    }
    return of(tree);
  }
}
