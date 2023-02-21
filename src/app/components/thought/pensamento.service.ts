import { IPensamentoProps } from './pensamento/pensamento';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  private readonly API = 'http://localhost:3000/pensamentos';
  constructor(private http: HttpClient) {}

  listar(
    pagina: number,
    filtro: string,
    favoritos: boolean
  ): Observable<IPensamentoProps[]> {
    const itemsPorPagina = 6;

    let params = new HttpParams()
      .set('_page', pagina)
      .set('_limit', itemsPorPagina);

    if (filtro.trim().length > 2) {
      params = params.set('q', filtro);
    }
    if (favoritos) {
      params = params.set('favorito', true);
    }

    return this.http.get<IPensamentoProps[]>(this.API, { params });
  }

  criar(pensamento: IPensamentoProps): Observable<IPensamentoProps> {
    return this.http.post<IPensamentoProps>(this.API, pensamento);
  }

  editar(pensamento: IPensamentoProps): Observable<IPensamentoProps> {
    const url = `${this.API}/${pensamento.id}`;
    return this.http.put<IPensamentoProps>(url, pensamento);
  }

  mudarFavorito(pensamento: IPensamentoProps): Observable<IPensamentoProps> {
    pensamento.favorito = !pensamento.favorito;
    return this.editar(pensamento);
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
