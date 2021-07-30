import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from '../categoria-read/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  adicionar(categoria: Categoria): Observable<Categoria> {
    const url = `${this.baseUrl}/categorias`
    return this.http.post<Categoria>(url, categoria);
  }

  excluir(id: String): Observable<void> {
    const url = `${this.baseUrl}/categorias/${id}`
    return this.http.delete<void>(url);
  }
  
  listarTodasCategorias(): Observable<Categoria[]> {
    const url = `${this.baseUrl}/categorias`
    return this.http.get<Categoria[]>(url);
  }

  buscarPorId(id: String): Observable<Categoria> {
    const url = `${this.baseUrl}/categorias/${id}`
    return this.http.get<Categoria>(url);
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'Ok', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}
