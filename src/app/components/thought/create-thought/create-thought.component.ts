import { PensamentoService } from './../pensamento.service';
import { IPensamentoProps } from './../pensamento/pensamento';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css'],
})
export class CreateThoughtComponent implements OnInit {
  pensamento: IPensamentoProps = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1',
  };
  constructor(private service: PensamentoService, private router: Router) {}

  ngOnInit(): void {}

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listar-pensamentos']);
    });
  }
  cancelarPensamento() {
    this.router.navigate(['/listar-pensamentos']);
  }
}
