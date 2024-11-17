import { Component, OnDestroy, OnInit } from '@angular/core';
import { WheaterHomeService } from '../Services';
import { WeatherDatas } from '../interfaces/Weather-Datas';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-wheater',
  templateUrl: './wheater-home.component.html',
  styleUrls: [],
})
//implementando o ciclo de vida no angular com ngOnInit
export class WheaterHomeComponent /*implements OnInit, OnDestroy */{
  //Desescrevendo do subscrible
  private readonly destroy$: Subject<void> = new Subject();
  //Definindo uma cidade como default
  initialCityName = 'São Paulo';
  //Criando uma propriedade para salvar dados da API
  //Atribuimos os Dados de Retorno que possui
  //Interface Propria
  weatherDatas!: WeatherDatas;
  //searchIcon = faMagnifyingGlass;

  //consumindo o serviço da Api wheaterHome no Componente
  // 4-Injetando o Serviço dentro de outras Classes
  constructor(private wheaterHomeService: WheaterHomeService) {}
    //Quando o componente Carregar o wheaterCard
    //Chamando os metodos
  ngOnInit(): void {
    this.getWheatherDatas(this.initialCityName);
  }

  //5- Criando metodo para consumir o serviço
  //Chamamos o metodo getWheatherDatas
  //Depois Buscamos Na Api pegamos os Dados
  //de Retorno

  getWheatherDatas(cityName: string): void {
    this.wheaterHomeService
      .getWeatherDatas(cityName)
      //pipes varios operadores de Dados
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        //Assinatura no observable
        //os Dados que pegamos resposta
        next: (response) => {
          response && (this.weatherDatas = response);
          console.log(this.weatherDatas);
        },
        error: (error) => console.log(error),
      });
  }


  //Método de Pesquisar Cidade
  //Quando Setamos o Vlor no input automaticamente
  //é Salvo no input porcausa do two-way data-binding
  //está observando e atribuindo valor para ela
  //setamoss o valor como vazio
  onSubmit():void {
  this.getWheatherDatas(this.initialCityName);
  //Setando como Vazio
  this.initialCityName = '';
  }

  //chamamos o Metodo do ciclo de vida do angular
  // o metodo OnDestroy  sempre nos desinscrevermos
  //dos Observables
ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
