import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RutasRoutingModule } from './rutas-routing.module';
import { SharedModule } from './shared/shared.module';
import { TemplateModule } from './template/template.module';
import { ReactiveModule } from './reactive/reactive.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RutasRoutingModule,
    SharedModule,
    TemplateModule,
    ReactiveModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
