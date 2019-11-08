import { HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
var ErrorHandler = (function () {
    function ErrorHandler() {
    }
    ErrorHandler.handleError = function (error) {
        var errorMessage;
        var body = error.error;
        if (error instanceof HttpErrorResponse) {
            errorMessage = "Erro " + error.status + " ao acessar a URL " + error.url + " - " + (error.statusText || '') + " " + body;
        }
        else {
            errorMessage = error.message ? error.message : error.toString();
        }
        console.log(errorMessage);
        return Observable.throw(errorMessage);
    };
    return ErrorHandler;
}());
export { ErrorHandler };
//# sourceMappingURL=app.error-handler.js.map