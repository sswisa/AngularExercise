import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from "./components/login/login.component";
import { AuthGuard } from "./guards/auth/auth.guard";

// const appRoutes: Routes = [
//   { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
//   { path: 'contact', component: ContactComponent, canActivate: [AuthGuard] },
//   { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
//   { path: 'login', component: LoginComponent},
//
//   // otherwise redirect to home
//   { path: '**', redirectTo: 'home' }
// ];

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  //{ path: 'contact', component: ContactComponent },
  //{ path: 'about', component: AboutComponent },
  //{ path: 'login', component: LoginComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: 'home' }
];

export const Routing = RouterModule.forRoot(appRoutes);
