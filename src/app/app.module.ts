import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgxCookiebotModule } from '@halloverden/ngx-cookiebot';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CookiebotConfig } from '../environments/cookiebot.config';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgxPageScrollCoreModule.forRoot(),
    NgxPageScrollModule,
    NgxCookiebotModule.forRoot(CookiebotConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
