import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IProduto } from 'src/app/model/iProduto.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.scss']
})
export class AtualizarProdutoComponent implements OnInit {
  produto: IProduto = {
    nome: '',
    validade: new Date('2020-01-01'),
    preco: 0
  };
  // nomeProduto: string = '';
  // validade: string = '';
  // preco: number = 0;

  constructor(private produtosServices: ProdutosService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.activatedRouter.snapshot.paramMap.get('id'))
    this.produtosServices.buscarPorId(id).subscribe(retorno => {
      this.produto = retorno
    })

  }
  salvarProduto(): void {
    this.produtosServices.atualizar(this.produto).subscribe(retorno => {
      console.log(retorno)
      this.produto = retorno;
    })
    this.router.navigate(['/produtos'])
  }

}
