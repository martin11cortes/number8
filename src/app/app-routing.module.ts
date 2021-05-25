import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
// import { DetailsComponentComponent } from './details-component/details-component.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  // {path: 'details/:id', component: DetailsComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
