import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [

  { path: 'login', component: LoginFormComponent },

  { path: 'table', component: ProductTableComponent },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
  { path: '**', component: NotFoundComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
