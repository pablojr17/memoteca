import { EditThoughtComponent } from './components/thought/edit-thought/edit-thought.component';
import { DeleteThoughtComponent } from './components/thought/delete-thought/delete-thought.component';
import { ListThoughtComponent } from './components/thought/list-thought/list-thought.component';
import { CreateThoughtComponent } from './components/thought/create-thought/create-thought.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar-pensamentos',
    pathMatch: 'full',
  },
  {
    path: 'listar-pensamentos',
    component: ListThoughtComponent,
  },
  {
    path: 'criar-pensamentos',
    component: CreateThoughtComponent,
  },
  {
    path: 'pensamentos/excluir-pensamento/:id',
    component: DeleteThoughtComponent,
  },
  {
    path: 'pensamentos/editar-pensamento/:id',
    component: EditThoughtComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
