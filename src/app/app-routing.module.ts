import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { ConversionComponent } from './components/conversion/conversion.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  {path:"calculadora", component: CalculadoraComponent},
  {path:"conversion", component: ConversionComponent}
  

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
