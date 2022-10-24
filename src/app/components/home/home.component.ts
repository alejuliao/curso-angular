import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public nomeProduto: string = 'Curso de angular';
  anuncio: string = `O ${this.nomeProduto} está em promoção`;
  idProduto: number = 123;
  precoProduto: number = 2.24;
  promocao: boolean = true
  constructor() {
    //variaveis de string com concatenacao
    console.log(this.nomeProduto)
    console.log(this.anuncio)
    console.log(this.idProduto)
  }

  ngOnInit(): void {
  }

}
