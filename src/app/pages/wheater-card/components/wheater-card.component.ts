import { WeatherDatas } from './../../wheater/interfaces/Weather-Datas';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wheater-card',
  templateUrl: './wheater-card.component.html',
  styleUrls: []
})
export class WheaterCardComponent implements OnInit {
  imgSol: string = './assets/assets-weatherApp/sun.jpg';
  imgFrio: string = './assets/assets-weatherApp/cold1.jpg';


  //Entrada de Dados
  /*Na Hora que o componente card for
  carregado será como Nulo pois não teremos
  informações digitadas sobre o Lugar*/
  @Input() WeatherDatasInput!: WeatherDatas;

  //Quando o componente Carregar o wheaterCard
  ngOnInit(): void {
    console
  .log('DADOS RECEBIDOS DO COMPONENTE PAI -WHEATER-CARD',this.WeatherDatasInput
  );
  }
}
