import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroCarrosComponent } from './components/cadastro-carros/cadastro-carros.component';
import { CadastroClientesComponent } from './components/cadastro-clientes/cadastro-clientes.component';
import { CadastroVendasComponent } from './components/cadastro-vendas/cadastro-vendas.component';
import { EstoqueComponent } from './components/estoque/estoque.component';
import { HomeComponent } from './components/home/home.component';
import { FinanciamentoComponent } from './components/financiamento/financiamento.component';
import { LoginComponent } from './components/login/login.component'

const routes: Routes = [
  {path:"cadastroCarros",component:CadastroCarrosComponent},
  {path:"cadastroClientes", component:CadastroClientesComponent},
  {path:"cadastroVendas", component:CadastroVendasComponent},
  {path:"estoque", component:EstoqueComponent},
  {path:"", component:HomeComponent},
  {path:"financiamento", component:FinanciamentoComponent},
  {path:"login", component:LoginComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
