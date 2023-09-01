import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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


@NgModule({
  declarations: [
    AppComponent,
    CadastroCarrosComponent,
    CadastroClientesComponent,
    CadastroVendasComponent,
    EstoqueComponent,
    HomeComponent,
    FinanciamentoComponent,
    LoginComponent,
    HomesisComponent,
    ListaCarrosComponent,
    ListaClientesComponent,
    ListaVendasComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
