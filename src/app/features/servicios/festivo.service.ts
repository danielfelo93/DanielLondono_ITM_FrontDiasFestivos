import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Festivo } from '../../core/entidades/Festivo';
import { FestivoAno } from '../../core/entidades/FestivoAno';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FestivoService {

  private url:string;

  constructor(private http: HttpClient) {
    this.url=`${environment.urlBase}festivos/`;
   }

  public listar(): Observable<Festivo[]>{
    return this.http.get<Festivo[]>(`${this.url}listar`);
   }

  public listarAno(anobusqueda: number): Observable<FestivoAno[]>{
    return this.http.get<FestivoAno[]>(`${this.url}listarAno?ano=${anobusqueda}`);
  }

  public validar(dia: number, mes: number, ano: number):Observable<boolean>{
    return this.http.get<boolean>(`${this.url}esFestivo/${dia}/${mes}?ano=${ano}`);
   }
}

