import { PensamentoService } from './../pensamento.service';
import { IPensamentoProps } from './../pensamento/pensamento';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-thought',
  templateUrl: './delete-thought.component.html',
  styleUrls: ['./delete-thought.component.css'],
})
export class DeleteThoughtComponent implements OnInit {
  pensamento: IPensamentoProps = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
    favorito: false,
  };
  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service
      .buscarPorId(Number(id))
      .subscribe((pensamento) => (this.pensamento = pensamento));
  }

  excluirPensamento() {
    if (this.pensamento.id) {
      this.service.excluir(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listar-pensamentos']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/listar-pensamentos']);
  }
}
