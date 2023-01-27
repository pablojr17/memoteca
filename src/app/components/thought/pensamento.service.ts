import { IPensamentoProps } from './pensamento/pensamento';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  private readonly API = 'http://localhost:3000/pensamentos';
  constructor(private http: HttpClient) {}

  listar(): Observable<IPensamentoProps[]> {
    return this.http.get<IPensamentoProps[]>(this.API);
  }

  criar(pensamento: IPensamentoProps): Observable<IPensamentoProps> {
    return this.http.post<IPensamentoProps>(this.API, pensamento);
  }

  editar(pensamento: IPensamentoProps): Observable<IPensamentoProps> {
    const url = `${this.API}/${pensamento.id}`;
    return this.http.put<IPensamentoProps>(url, pensamento);
  }

  excluir(id: number): Observable<IPensamentoProps> {
    const url = `${this.API}/${id}`;
    return this.http.delete<IPensamentoProps>(url);
  }

  buscarPorId(id: number): Observable<IPensamentoProps> {
    const url = `${this.API}/${id}`;
    return this.http.get<IPensamentoProps>(url);
  }
}
