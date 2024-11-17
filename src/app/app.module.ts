//Modulos contem importações de componentes e todas as importações que o componente vai precisar
//providers são servicos que vamos injetar ou usar dentro de nosso componente
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WheaterHomeComponent } from './pages/wheater';
import { WheaterCardComponent } from './pages/wheater-card/components/wheater-card.component';
@NgModule({
  declarations: [
    AppComponent,
    WheaterHomeComponent,
    WheaterCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  exports:[
    WheaterCardComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
