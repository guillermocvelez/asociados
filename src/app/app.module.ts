import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './components/header.component';
import {JumbotronComponent} from './components/jumbotron.component';
import {BannerComponent} from './components/banner.component';
import {FooterComponent} from './components/footer.component';
import {FormComponent} from './components/form.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JumbotronComponent,
    BannerComponent,
    FooterComponent,
    FormComponent    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
