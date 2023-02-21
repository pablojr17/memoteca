import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PensamentoService } from './../pensamento.service';
import { IPensamentoProps } from './../pensamento/pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.css'],
})
export class EditThoughtComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.formulario = this.formBuilder.group({
        id: [pensamento.id],
        conteudo: [
          pensamento.conteudo,
          Validators.compose([
            Validators.required,
            Validators.pattern(/(.|\s)*\S(.|\s)*/),
          ]),
        ],
        autoria: [
          pensamento.autoria,
          Validators.compose([Validators.required, Validators.minLength(3)]),
        ],
        modelo: [pensamento.modelo],
        favorito: [pensamento.favorito],
      });
    });
  }

  editarPensamento() {
    this.service.editar(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listar-pensamentos']);
    });
  }

  cancelar() {
    this.router.navigate(['/listar-pensamentos']);
  }

  habilitarBotao(): string {
    if (this.formulario.valid) {
      return 'botao';
    } else return 'botao__desabilitado';
  }
}
