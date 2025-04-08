import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { UserService } from "../services/user.service";

@Injectable(
)
export class CanActivateCreateUser implements CanActivate {

  constructor(  private userService: UserService,
                private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    const currentUser = this.userService.getLoggedinUser();
    if (!!currentUser) {
      return true;
    } else {
      this.router.navigate(['/login']); 
      return false;
    }
  }
}
