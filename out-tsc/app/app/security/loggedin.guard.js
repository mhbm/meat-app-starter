var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { LoginService } from "./login/login.service";
var LoggedInGuard = (function () {
    function LoggedInGuard(loginService) {
        this.loginService = loginService;
    }
    LoggedInGuard.prototype.checkAuthentification = function (path) {
        var loggedIn = this.loginService.isLoggedIn();
        if (!loggedIn) {
            this.loginService.handleLogin("" + path);
        }
        return loggedIn;
    };
    LoggedInGuard.prototype.canLoad = function (route) {
        console.log("Method canLoad");
        return this.checkAuthentification(route.path);
    };
    LoggedInGuard.prototype.canActivate = function (activatedRouteSnapshot, routerStateSnashot) {
        console.log("Method canActivate");
        return this.checkAuthentification(activatedRouteSnapshot.routeConfig.path);
    };
    LoggedInGuard = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [LoginService])
    ], LoggedInGuard);
    return LoggedInGuard;
}());
export { LoggedInGuard };
//# sourceMappingURL=loggedin.guard.js.map