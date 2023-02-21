import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateThoughtComponent } from './components/thought/create-thought/create-thought.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListThoughtComponent } from './components/thought/list-thought/list-thought.component';
import { PensamentoComponent } from './components/thought/pensamento/pensamento.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteThoughtComponent } from './components/thought/delete-thought/delete-thought.component';
import { EditThoughtComponent } from './components/thought/edit-thought/edit-thought.component';
import { ButtonLoadMoreComponent } from './components/thought/button-load-more/button-load-more.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateThoughtComponent,
    ListThoughtComponent,
    PensamentoComponent,
    DeleteThoughtComponent,
    EditThoughtComponent,
    ButtonLoadMoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
