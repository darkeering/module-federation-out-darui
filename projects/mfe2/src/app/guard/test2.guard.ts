import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class Test2Guard implements CanDeactivate<unknown> {
  constructor(
    private router: Router
  ) {}
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(111);
      console.log('/mfe2'+nextState?.url);
      // debugger
      this.router.navigate(['/mfe2/comments'])
    return false;
  }
  
}
