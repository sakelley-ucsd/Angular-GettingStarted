import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from 'app/home/welcome.component';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path:'', redirectTo: 'welcome', pathMatch: 'full'},
      { path:'**', redirectTo: 'welcome', pathMatch: 'full'}
    ], { useHash:false }),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
