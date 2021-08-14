import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livro } from '../../model/livro';
import { LivroService } from '../../services/livro.service';

@Component({
  selector: 'app-livro-read',
  templateUrl: './livro-read.component.html',
  styleUrls: ['./livro-read.component.css']
})
export class LivroReadComponent implements OnInit {

  displayedColumns: string[] = ['id', 'titulo', 'livros', 'acoes'];

  idCad: String = '';
  livros: Livro[] = []

  constructor(private livroService: LivroService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.idCad = this.activatedRoute.snapshot.paramMap.get('idCad')!;
    this.listarTodosLivros();
  }

  listarTodosLivros(): void {
    this.livroService.listarTodosLivrosPorCategoria(this.idCad).subscribe((resposta) => {
      this.livros = resposta;
      console.log(this.livros);
      console.log("id "+this.livros);
    })
  }

}
