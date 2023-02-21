import { PensamentoService } from './../pensamento.service';
import { IPensamentoProps } from './../pensamento/pensamento';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { minusculoValidator } from './minusculoValidators';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css'],
})
export class CreateThoughtComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ]),
      ],
      autoria: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          minusculoValidator,
        ]),
      ],
      modelo: ['modelo1'],
      favorito: [false],
    });
  }

  criarPensamento() {
    if (this.formulario.valid) {
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listar-pensamentos']);
      });
    }
  }

  cancelarPensamento() {
    this.router.navigate(['/listar-pensamentos']);
  }

  habilitarBotao() {
    if (this.formulario.valid) {
      return 'botao';
    } else {
      return 'botao__desabilitado';
    }
  }
}
