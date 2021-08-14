import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaReadComponent } from './components/views/categoria/categoria-read/categoria-read.component';
import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component';
import { CategoriaDeleteComponent } from './components/views/categoria/categoria-delete/categoria-delete.component';
import { CategoriaUpdateComponent } from './components/views/categoria/categoria-update/categoria-update.component';
import { HomeComponent } from './components/views/home/home.component';
import { EditoraReadComponent } from './components/views/editora/editora-read/editora-read.component';
import { EditoraCreateComponent } from './components/views/editora/editora-create/editora-create.component';
import { LivroReadComponent } from './components/views/livro-read/livro-read.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "categorias",
    component: CategoriaReadComponent
  },
  {
    path: "categorias/create",
    component: CategoriaCreateComponent
  },
  {
    path: "categorias/delete/:id",
    component: CategoriaDeleteComponent
  },
  {
    path: "categorias/update/:id",
    component: CategoriaUpdateComponent
  },
  {
    path: "categorias/:id/livros",
    component: LivroReadComponent
  },
  {
    path: "editoras",
    component: EditoraReadComponent
  },
  {
    path: "editoras/create",
    component: EditoraCreateComponent
  },
  {
    path: "livros",
    component: LivroReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
