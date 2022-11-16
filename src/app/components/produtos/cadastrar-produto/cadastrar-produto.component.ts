import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.scss']
})
export class CadastrarProdutoComponent implements OnInit {
  nomeProduto: string = '';
  validade: string = '';
  preco: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  salvarProduto(): void {
    console.log(this.nomeProduto, this.preco, this.validade)
  }

}
