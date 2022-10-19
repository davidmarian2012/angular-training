import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AccountService } from "./account.service";

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private accountService: AccountService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(this.accountService.isUserLogged())
        {
            return true;
        }
        else
        {
            return true;
            // window.alert("You must login first!");
            // this.router.navigate(['']);
            // return false;
        }
    }
}