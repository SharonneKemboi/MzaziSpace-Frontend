import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { OurservicesComponent } from './components/ourservices/ourservices.component';
import { CommunityComponent } from './components/community/community.component';
import { GroupsComponent } from './components/groups/groups.component';
import { MzazieventsComponent } from './components/mzazievents/mzazievents.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
const appRoutes: Routes = [
  
  {path: 'about', component: AboutComponent},
  {path: 'service', component: OurservicesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    OurservicesComponent,
    CommunityComponent,
    GroupsComponent,
    MzazieventsComponent,
    TestimonialsComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes,{enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
