var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { NotificationService } from 'app/shared/message/notification.service';
import { ActivatedRoute, Router } from '@angular/router';
var LoginComponent = (function () {
    function LoginComponent(fb, loginService, notificationService, activatedRoute, router) {
        this.fb = fb;
        this.loginService = loginService;
        this.notificationService = notificationService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            email: this.fb.control('', [Validators.required, Validators.email]),
            password: this.fb.control('', [Validators.required])
        });
        this.navigateTo = this.activatedRoute.snapshot.params['to'] || btoa('/');
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginService.login(this.loginForm.value.email, this.loginForm.value.password)
            .subscribe(function (user) { return _this.notificationService.notify("Bem vindo, " + user.name); }, function (response) {
            return _this.notificationService.notify(response.error.message);
        }, function () {
            _this.router.navigate([atob(_this.navigateTo)]);
        });
    };
    LoginComponent = __decorate([
        Component({
            selector: 'mt-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        __metadata("design:paramtypes", [FormBuilder,
            LoginService,
            NotificationService,
            ActivatedRoute,
            Router])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map