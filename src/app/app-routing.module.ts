import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroCarrosComponent } from './components/cadastrocarros/cadastrocarros.component';
import { CadastroClientesComponent } from './components/cadastroclientes/cadastroclientes.component';
import { CadastroVendasComponent } from './components/cadastrovendas/cadastrovendas.component';
import { EstoqueComponent } from './components/estoque/estoque.component';
import { HomeComponent } from './components/home/home.component';
import { FinanciamentoComponent } from './components/financiamento/financiamento.component';
import { LoginComponent } from './components/login/login.component';
import { HomesisComponent } from './components/homesis/homesis.component';
import { ListaCarrosComponent } from './components/listacarros/listacarros.component';
import { ListaClientesComponent } from './components/listaclientes/listaclientes.component';
import { ListaVendasComponent } from './components/listavendas/listavendas.component'

const routes: Routes = [
  {path:"cadastrocarros",component:CadastroCarrosComponent},
  {path:"cadastroclientes", component:CadastroClientesComponent},
  {path:"cadastrovendas", component:CadastroVendasComponent},
  {path:"estoque", component:EstoqueComponent},
  {path:"", component:HomeComponent},
  {path:"financiamento", component:FinanciamentoComponent},
  {path:"login", component:LoginComponent},
  {path:"homesis", component:HomesisComponent},
  {path:"listacarros",component:ListaCarrosComponent},
  {path:"listaclientes", component:ListaClientesComponent},
  {path:"listavendas", component:ListaVendasComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
