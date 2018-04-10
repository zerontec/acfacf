import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';

import { AppComponent } from './app.component';

//firebae

import {AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment} from '../environments/environment';
//components
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent} from './components/products/product/product.component';
//services
import {ProductService} from './services/product.service';
import { ResgisterPageComponent } from './components/resgister-page/resgister-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PrivatepageComponent } from './components/privatepage/privatepage.component';
import { NofoundPageComponent } from './components/nofound-page/nofound-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductListComponent,
    ProductComponent,
    ResgisterPageComponent,
    LoginPageComponent,
    PrivatepageComponent,
    NofoundPageComponent
   
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()

  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
