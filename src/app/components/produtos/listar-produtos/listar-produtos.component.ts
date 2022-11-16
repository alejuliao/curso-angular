import { ProdutosService } from './../../../services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { IProduto } from 'src/app/model/iProduto.model';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.scss']
})
export class ListarProdutosComponent implements OnInit {
  // listaStrings: string[] = ['um', 'dois', 'tres', 'dasda']
  // listaNumeros: number[] = [1, 2, 3, 4]

  listaProdutos: IProduto[] = [
    // { nome: "curso um", precoProduto: 35.55, validade: '2022-02-01', idProduto: 1 },
    // { nome: "curso dois", precoProduto: 49.99, validade: '2022-03-03', idProduto: 2 },
    // { nome: "curso tres", precoProduto: 5.99, validade: '2022-04-04', idProduto: 3 }
  ]
  constructor(private produtoService: ProdutosService) {
    // for (let item of this.listaStrings) {
    //   console.log(item)
    // }
    // for (let item of this.listaNumeros) {
    //   console.log(item)
    // }
    // for (let item of this.listaProdutos) {
    //   console.log(item)
    // }
  }

  ngOnInit(): void {
    this.carregarProdutos();
  }
  carregarProdutos(): void {
    this.produtoService.buscarTodos().subscribe(retorno => {
      this.listaProdutos = retorno
    })
  }

}
