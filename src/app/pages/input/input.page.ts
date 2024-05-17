import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
  nota1: '';
  nota2: '';
  nota3: '';
  nota4: '';
  input: any;

  constructor() { }

  enviar(){
    this.input = (this.nota1+this.nota2+this.nota3+this.nota4)/4;
  }

  ngOnInit() {
  }

}
