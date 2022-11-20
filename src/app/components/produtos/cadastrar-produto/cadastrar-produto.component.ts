import { ProdutosService } from './../../../services/produtos.service';
import { IProduto } from 'src/app/model/iProduto.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.scss']
})
export class CadastrarProdutoComponent implements OnInit {
  produto: IProduto = {
    nome: '',
    validade: new Date('2020-01-01'),
    preco: 0
  };
  // nomeProduto: string = '';
  // validade: string = '';
  // preco: number = 0;
  constructor(private produtosServices: ProdutosService, private router: Router) { }

  ngOnInit(): void {
  }
  salvarProduto(): void {
    this.produtosServices.cadastrar(this.produto).subscribe(retorno => {
      console.log(retorno)
      this.produto = retorno;
    })
    this.router.navigate(['/produtos'])
  }

}
