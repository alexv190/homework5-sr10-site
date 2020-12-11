import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormatInterceptor } from './format.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule 
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: FormatInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
