import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../../../model/categoria.model';
import { CategoriaService } from '../../../services/categoria.service';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {

  categoria: Categoria = {
    id: "",
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

  excluir(): void {
    this.service.excluir(this.categoria.id!).subscribe((resposta) => {
      this.router.navigate(["categorias"])
      this.service.mensagem("Categoria excluída com sucesso!");
    }, err => {
      this.service.mensagem(err.error.error);
    })
  }

  cancelar(): void {
    this.router.navigate(["categorias"])
  }

}
