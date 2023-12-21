import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoboticComponent } from './robotic/robotic.component';
import { DrBernavaComponent } from './dr-bernava/dr-bernava.component';
import { DrAnsaldiComponent } from './dr-ansaldi/dr-ansaldi.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'robotica', component: RoboticComponent},
  { path: 'dr-juan-luis-bernava', component: DrBernavaComponent},
  { path: 'dr-sebastian-ansaldi', component: DrAnsaldiComponent},
  { path: '**', redirectTo: ''}, // Si no encuentra la ruta, redirige a home

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
