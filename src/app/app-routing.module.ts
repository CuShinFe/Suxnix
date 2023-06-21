import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// 
import { MainComponent } from './routes/client/component/main/main.component';
import { HomeComponent } from './routes/client/pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    component: MainComponent,
    children: [
      { path:'', component: HomeComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
