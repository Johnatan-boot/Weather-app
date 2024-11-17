import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//Injectable = decorator quando temos um serviço precisamos
//dele, está dizendo esta classe pode ser Injetada no componente
//PorvideIn -> Onde ela vai ser provida
@Injectable({
  providedIn: 'root'
})
export class WheaterHomeService {

  //1 - Criando uma Variavel para consumir a API
  private apiKey = '3f0fc96517a055c921d03ceb0afaf141';
  //2- Injetando a Classe de serviço
  constructor(private http: HttpClient) { }

  //3 - Criando o Metodo de Serviço Get Para o Consumo da API
  //quando chamarmos o metodo esperamos receber o Observable
  //Assim como numa Requisição precisamos receber uma função de callback
  //Precisamos nos increver no OBSERVABLE => para acessar os dados
  getWeatherDatas(cityName: string):Observable<any>{
    //retornando o observable passando a url da Api
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`,{})
  }
}
