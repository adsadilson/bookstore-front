import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../../../model/categoria.model';
import { CategoriaService } from '../../../services/categoria.service';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {

  categoria: Categoria = {
    nome: '',
    descricao: ''
  }
  constructor(private service: CategoriaService, private router: Router) { }

  ngOnInit(): void {
  }

  adicionar(): void {
    this.service.adicionar(this.categoria).subscribe((resposta) => {
      this.router.navigate(["categorias"])
      this.service.mensagem("Categoria criada com sucesso!")

    }, err => {
      if (!err.error.errors) {
        this.service.mensagem(err.error.error)
      } {
        for (let i = 0; i < err.error.errors.length; ++i) {
          this.service.mensagem(err.error.errors[i].message)
        }
      }
    });
  }

  cancelar(): void {
    this.router.navigate(["categorias"])
  }

}
