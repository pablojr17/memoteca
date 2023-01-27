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
  pensamento: IPensamentoProps = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
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

  editarPensamento() {
    if (this.pensamento.id) {
      this.service.editar(this.pensamento).subscribe(() => {
        this.router.navigate(['/listar-pensamentos']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/listar-pensamentos']);
  }
}
