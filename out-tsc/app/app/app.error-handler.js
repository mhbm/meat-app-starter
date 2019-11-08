var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpErrorResponse } from "@angular/common/http";
import 'rxjs/add/observable/throw';
import { ErrorHandler, Injectable, Injector } from "@angular/core";
import { NotificationService } from './shared/message/notification.service';
import { LoginService } from "./security/login/login.service";
var ApplicationErrorHandler = (function (_super) {
    __extends(ApplicationErrorHandler, _super);
    function ApplicationErrorHandler(ns, injector) {
        var _this = _super.call(this) || this;
        _this.ns = ns;
        _this.injector = injector;
        return _this;
    }
    ApplicationErrorHandler.prototype.handleError = function (errorResponse) {
        if (errorResponse instanceof HttpErrorResponse) {
            var message = errorResponse.error.message;
            switch (errorResponse.status) {
                case 401:
                    this.injector.get(LoginService).handleLogin();
                    break;
                case 403:
                    this.ns.notify(message || 'Não autorizado');
                    break;
                case 404:
                    this.ns.notify(message || 'Recurso não encontrado. Verifique no console para mais informações');
                    break;
            }
        }
        _super.prototype.handleError.call(this, errorResponse);
    };
    ApplicationErrorHandler = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [NotificationService, Injector])
    ], ApplicationErrorHandler);
    return ApplicationErrorHandler;
}(ErrorHandler));
export { ApplicationErrorHandler };
//# sourceMappingURL=app.error-handler.js.map