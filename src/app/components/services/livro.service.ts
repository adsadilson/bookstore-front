import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Livro } from '../model/livro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  listarTodosLivrosPorCategoria(idCat: String): Observable<Livro[]>{
    const url = `${this.baseUrl}/livros?categoria=${idCat}`
    return this.http.get<Livro[]>(url);
  }
}
