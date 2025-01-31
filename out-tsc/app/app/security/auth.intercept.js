var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, Injector } from "@angular/core";
import { LoginService } from "./login/login.service";
var AuthInterceptor = (function () {
    function AuthInterceptor(injector) {
        this.injector = injector;
    }
    //@NEXT REPRESENTA O PROXIMO OBJETO OU O ULTIMO
    AuthInterceptor.prototype.intercept = function (request, next) {
        var loginService = this.injector.get(LoginService);
        if (loginService.isLoggedIn()) {
            //precisa clonar para trocar o headers
            var authRequest = request.clone({
                setHeaders: {
                    'Authorization': "Bearer " + loginService.user.accessToken
                }
            });
            return next.handle(authRequest);
        }
        else {
            return next.handle(request);
        }
    };
    AuthInterceptor = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Injector])
    ], AuthInterceptor);
    return AuthInterceptor;
}());
export { AuthInterceptor };
//# sourceMappingURL=auth.intercept.js.map