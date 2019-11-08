import { CanLoad, Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { LoginService } from "./login/login.service";

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate {
    
    constructor(private loginService: LoginService) {}

    checkAuthentification(path: string) : boolean {
        const loggedIn = this.loginService.isLoggedIn() 
        
        if (!loggedIn) {
            this.loginService.handleLogin(`${path}`)
        }

        return loggedIn
    }

    canLoad(route: Route) : boolean {
        console.log("Method canLoad")
       return this.checkAuthentification(route.path)
    }

    canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot, routerStateSnashot: RouterStateSnapshot) : boolean {
        console.log("Method canActivate")
        return this.checkAuthentification(activatedRouteSnapshot.routeConfig.path)
    }
}