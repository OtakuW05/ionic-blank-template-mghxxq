import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.page.html',
  styleUrls: ['./botao.page.scss'],
})
export class BotaoPage implements OnInit {
  rua: string = '';
  numero: '';
  bairro: string = '';
  cidade: string = '';
  estado: string = '';
  cep: '';
  input: any;

  constructor() {}

  enviar(){
    this.input = this.rua+', '+this.numero+', '+this.bairro+', '+this.cidade+', '+this.estado+', '+this.cep;
  }
  ngOnInit() {}
}
