import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../../../model/categoria.model';
import { CategoriaService } from '../../../services/categoria.service';

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.css']
})
export class CategoriaUpdateComponent implements OnInit {

  categoria: Categoria = {
    nome: "",
    descricao: ""
  }

  constructor(private service: CategoriaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.categoria.id = this.route.snapshot.paramMap.get("id")!;
    this.buscarPorId();

  }

  buscarPorId(): void {
    this.service.buscarPorId(this.categoria.id!).subscribe((resposta) => {
      this.categoria = resposta;
    })
  }

  atualizar(): void {
    this.service.atualizar(this.categoria).subscribe((resposta) => {
      this.router.navigate(["categorias"])
      this.service.mensagem("Categoria atualizada com sucesso!")

    }, err => {
      if(!err.error.errors){
        this.service.mensagem(err.error.error)  
      }{
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
