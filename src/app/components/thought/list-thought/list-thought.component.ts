import { PensamentoService } from './../pensamento.service';
import { IPensamentoProps } from './../pensamento/pensamento';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css'],
})
export class ListThoughtComponent implements OnInit {
  listaPensamentos: IPensamentoProps[] = [];
  paginaAtual = 1;
  haMaisPensamentos = true;
  filtro: string = '';
  favoritos: boolean = false;
  listaFavoritos: IPensamentoProps[] = [];
  titulo: string = 'Meu Mural';
  constructor(private service: PensamentoService, private router: Router) {}

  ngOnInit(): void {
    this.service
      .listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe(
        (listPensamentos) => (this.listaPensamentos = listPensamentos)
      );
  }

  carregarMaisPensamentos() {
    this.service
      .listar(++this.paginaAtual, this.filtro, this.favoritos)
      .subscribe((listaPensamento) => {
        this.listaPensamentos.push(...listaPensamento);

        if (!listaPensamento.length) {
          this.haMaisPensamentos = false;
        }
      });
  }

  pesquisarPensamentos() {
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;

    this.service
      .listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe((listaPensamento) => {
        this.listaPensamentos = listaPensamento;
      });
  }

  recarregarComponente() {
    this.favoritos = false;
    this.paginaAtual = 1;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }

  listarFavoritos() {
    this.titulo = 'Meus Favoritos';
    this.favoritos = true;
    this.haMaisPensamentos;
    this.paginaAtual = 1;

    this.service
      .listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe((listaPensamentosFavoritos) => {
        this.listaPensamentos = listaPensamentosFavoritos;
        this.listaFavoritos = listaPensamentosFavoritos;
      });
  }
}
