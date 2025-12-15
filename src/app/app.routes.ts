import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AboutDetailedComponent } from './pages/about-detailed/about-detailed.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SignupElderlyComponent } from './pages/signup-elderly/signup-elderly.component';
import { SignupStudentsComponent } from './pages/signup-students/signup-students.component';
import { ContactSoonComponent } from './pages/contact-soon/contact-soon.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'about-detailed', component: AboutDetailedComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signup-elderly', component: SignupElderlyComponent },
  { path: 'signup-students', component: SignupStudentsComponent },
  { path: 'contact-soon', component: ContactSoonComponent },
  { path: '**', redirectTo: '' }
];
