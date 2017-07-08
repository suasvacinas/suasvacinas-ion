import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { SuasVacinasAppComponent } from './app.component';
import { ExemploCrudPage } from '../pages/exemplo-crud/exemplo-crud';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirebaseModule } from "../firebase/firebase.module";
import { FirebaseProvider } from '../firebase/firebase';
import { HomeBotoesPage } from "../pages/home-botoes/home-botoes";
import {VacinasNavbarComponent} from "../pages/vacinas-navbar/vacinas-navbar.component";
import {VacinasLogInComponent} from "../pages/vacinas-login.component";
import {VacinasAuthService} from "../firebase/vacinas-auth.service";
import {OpcoesComponent} from "../pages/opcoes/opcoes";
import {OpcaoComponent} from "../pages/opcoes/opcao.component";
import {DosesComponent} from "../pages/doses/doses.component";
import {DescricaoVacinaComponent} from "../pages/descricao-vacina.component";
import {LoadingDropComponent} from "../pages/loading-drop.component";
import {VacinasFooterComponent} from "../pages/vacinas-navbar/vacinas-footer.component";
import {VacinasExtraSUSPage} from "../pages/extra-sus/extra-sus";
import {WelderComponent} from "../welder/welder.component";

@NgModule({
  declarations: [
    HomeBotoesPage,
    SuasVacinasAppComponent,
    ExemploCrudPage,
    ListPage,
    OpcaoComponent,
    OpcoesComponent,
    WelderComponent,
    DosesComponent,
    DescricaoVacinaComponent,
    VacinasNavbarComponent,
    VacinasFooterComponent,
    VacinasLogInComponent,
    LoadingDropComponent,
    VacinasExtraSUSPage
  ],
  imports: [
    BrowserModule,
    FirebaseModule,
    IonicModule.forRoot(SuasVacinasAppComponent,{
      backButtonText: 'Voltar',
      iconMode: 'ios',
      mode: 'ios'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SuasVacinasAppComponent,
    HomeBotoesPage,
    ExemploCrudPage,
    ListPage,
    DescricaoVacinaComponent,
    OpcaoComponent,
    OpcoesComponent,
    WelderComponent,
    DosesComponent,
    VacinasExtraSUSPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
    VacinasAuthService
  ]
})
export class AppModule {}
