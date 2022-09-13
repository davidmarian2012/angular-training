import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AccountService } from "./auth/services/account.service";

@Injectable()
export class GuardService implements CanActivate{

    constructor(private accountService: AccountService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(this.accountService.isUserLogged())
        {
            return true;
        }
        else
        {
            window.alert("You must login first!");
            this.router.navigate(['']);
            return false;
        }
    }
}