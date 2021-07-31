import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Editora } from 'src/app/components/model/Editora.model';
import { EditoraService } from 'src/app/components/services/editora.service';

@Component({
  selector: 'app-editora-read',
  templateUrl: './editora-read.component.html',
  styleUrls: ['./editora-read.component.css']
})
export class EditoraReadComponent implements OnInit {
 
  editoras: Editora[] = []

  displayedColumns: string[] = ['id', 'nome', 'cnpj', 'fone', 'livros', 'acoes'];
 
  constructor(private service: EditoraService, private router: Router) { }

  ngOnInit(): void {
    this.listarEditoras();
  }

  listarEditoras() {
    this.service.listarTodasEditoras().subscribe(resposta => {
      this.editoras = resposta;
    })
  }

  navegarParaEditora(){
    this.router.navigate(["editoras/create"]);
  }

}
