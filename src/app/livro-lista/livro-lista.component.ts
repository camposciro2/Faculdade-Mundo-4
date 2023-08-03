import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro';
import { ControleLivrosService } from '../controle-livros.service';
import { ControleEditoraService } from '../controle-editora.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {
  livros: Livro[] = [];

  constructor(
    private servLivros: ControleLivrosService,
    private servEditora: ControleEditoraService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.livros = this.servLivros.livros;
  }

  obterNome(codEditora: number): string {
    // Utilize o método correto 'getEditoras' do serviço 'ControleEditoraService'
    const editora = this.servEditora.getEditoras().find(e => e.codEditora === codEditora);
    return editora ? editora.nome : '';
  }

  excluir(codigo: number): void {
    this.servLivros.excluir(codigo);
  }
}
