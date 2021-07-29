import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria/categoria.service';
import { Categoria } from './categoria.model';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent implements OnInit {
  
  categorias: Categoria[]= []  

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'acoes'];
  
  constructor(private service: CategoriaService) { }

  ngOnInit(): void {
    this.listarCategorias();
  }

  listarCategorias(){
    this.service.listarTodasCategorias().subscribe(resposta => {
      console.log(resposta);
      this.categorias = resposta;
    })
  }

}
