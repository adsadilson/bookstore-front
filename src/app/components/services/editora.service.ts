import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Editora } from '../model/Editora.model';

@Injectable({
  providedIn: 'root'
})
export class EditoraService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }


  listarTodasEditoras(): Observable<Editora[]> {
    const url = `${this.baseUrl}/editoras`
    return this.http.get<Editora[]>(url);
  }

  adicionar(editora: Editora): Observable<Editora> {
    const url = `${this.baseUrl}/editoras`
    return this.http.post<Editora>(url, editora);
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'Ok', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}
