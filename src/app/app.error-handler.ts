import { HttpErrorResponse } from "@angular/common/http"

import 'rxjs/add/observable/throw';
import { ErrorHandler, Injectable, Injector } from "@angular/core";

import { NotificationService } from './shared/message/notification.service'

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {

    constructor(private ns: NotificationService, private injector: Injector) {
        super()
    }

    handleError(errorResponse: HttpErrorResponse | any) {
        if (errorResponse instanceof HttpErrorResponse) {
            const message = errorResponse.error.message
            switch (errorResponse.status) {
                case 401:

                    break;
                case 403:
                    this.ns.notify(message || 'Não autorizado')
                    break;
                case 404:
                    this.ns.notify(message || 'Recurso não encontrado. Verifique no console para mais informações')
                    break;
            }
        }

        super.handleError(errorResponse)
    }
}