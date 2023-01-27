import { PensamentoService } from './../pensamento.service';
import { IPensamentoProps } from './../pensamento/pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css'],
})
export class ListThoughtComponent implements OnInit {
  listaPensamentos: IPensamentoProps[] = [];
  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.service
      .listar()
      .subscribe(
        (listPensamentos) => (this.listaPensamentos = listPensamentos)
      );
  }
}
