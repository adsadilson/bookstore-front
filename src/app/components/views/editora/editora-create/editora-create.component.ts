import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Editora } from 'src/app/components/model/Editora.model';
import { EditoraService } from 'src/app/components/services/editora.service';

@Component({
  selector: 'app-editora-create',
  templateUrl: './editora-create.component.html',
  styleUrls: ['./editora-create.component.css']
})
export class EditoraCreateComponent implements OnInit {

  editora: Editora = {
    nome: "",
    cnpj: "",
    fone: "",
  }


  constructor(private service: EditoraService, private router: Router) { }

  ngOnInit(): void {
  }

  adicionar(): void {
    this.service.adicionar(this.editora).subscribe((resposta) => {
      this.router.navigate(["editoras"])
      this.service.mensagem("Editora criada com sucesso!")

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
    this.router.navigate(["editoras"])
  }

}
