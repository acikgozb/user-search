import {LoadingService} from "./../../services/loading/loading.service";
import {finalize, tap} from "rxjs/operators";
import {Observable} from "rxjs";
import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";


@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(
    private loadingService: LoadingService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.showLoader();

    return next.handle(request)
      .pipe(
        finalize(() => this.loadingService.hideLoader())
      );
  }
}
