import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";
import { Injectable } from "@angular/core";
const TOKEN_HEADER = "Authorization";
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private login:LoginService){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //add the jwt token
        let authreq = req;
        const token=this.login.getToken();
        if(token!=null){
            authreq=authreq.clone({setHeaders:{TOKEN_HEADER:'Bearer ${token'}})
        }
        return next.handle(authreq);
    }
}
export const authInterceptorProviders=[
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true,
    },
];