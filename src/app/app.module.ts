import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { Routing } from './app.routing';
import { AppComponent } from './app.component';
import { BaseConverterComponent } from "./components/base-converter/base-converter.component";
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ItemsFormComponent } from './components/items-form/items-form.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { SortPipe } from './pipes/sort/sort.pipe';
import { AuthGuard } from "./guards/auth/auth.guard";
//import { LoginComponent } from './components/login/login.component';
import { TokenInterceptor } from "./services/token.interceptor";


@NgModule({
  declarations: [
    SortPipe,
    AppComponent,
    AboutComponent,
    ContactComponent,
    BaseConverterComponent,
    HomeComponent,
    ItemsFormComponent,
    MainHeaderComponent,
    PipesComponent,
    //LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Routing
  ],
  providers: [
    // AuthGuard,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
