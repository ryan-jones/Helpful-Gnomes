import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RoutingModule } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GnomesComponent } from './components/gnomes/gnomes.component';

import { reducers } from './store/app.store';
import { GnomeEffects } from './store/gnomes/gnomes.effects';

import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { ErrorInterceptor } from './interceptors/error.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    GnomesComponent,
    HeaderComponent,
    NotFoundComponent,
    SearchFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([GnomeEffects]),

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
