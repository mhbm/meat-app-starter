import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { HTTP_INTERCEPTORS } from '@angular/common/http'

import { InputComponent } from "./input/input.component"
import { RadioComponent } from "./radio/radio.component"
import { RatingComponent } from "./rating/rating.component"
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { RestaurantsService } from "app/restaurants/restaurants.service";
import { OrderService } from "app/order/order.service";
import { SnackbarComponent } from './message/snackbar/snackbar.component';
import { NotificationService } from "./message/notification.service";
import { LoginService } from "app/security/login/login.service";

import { LoggedInGuard } from '../security/loggedin.guard'
import { LeaveOrderGuard } from "app/order/leave-order.guard";
import { AuthInterceptor } from "app/security/auth.intercept";

@NgModule({
    declarations: [
        InputComponent,
        RadioComponent,
        RatingComponent, SnackbarComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        InputComponent,
        RadioComponent,
        RatingComponent,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SnackbarComponent
    ]
})

export class SharedModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ShoppingCartService,
                LoggedInGuard,
                LoginService,
                RestaurantsService,
                OrderService,
                NotificationService,
                LeaveOrderGuard,
                {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
            ]
        }
    }
}