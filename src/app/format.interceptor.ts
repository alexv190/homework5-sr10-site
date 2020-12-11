import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormatMapperService } from './format-mapper.service';
import {delay, finalize, map} from 'rxjs/operators';

@Injectable()
export class FormatInterceptor implements HttpInterceptor {

  constructor(private formatMapper:FormatMapperService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse && event.url == 'https://jsonplaceholder.typicode.com/users') {
         return this.formatMapper.mapUserResponseToUser(event);
        }
        return event;
      })
      
    );
  }
}
