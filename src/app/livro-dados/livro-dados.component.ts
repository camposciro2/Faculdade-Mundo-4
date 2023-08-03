import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro';
import { ControleLivrosService } from '../controle-livros.service';
import { ControleEditoraService } from '../controle-editora.service';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {
  livro: Livro = new Livro(0, 0, '', '', []); // Certifique-se de que a classe Livro tenha um construtor que aceite esses 5 argumentos.

  constructor(private controleLivrosService: ControleLivrosService, private controleEditoraService: ControleEditoraService) { }

  obterNome(codEditora: number): string {
    const editora = this.controleEditoraService.getEditoras().find(e => e.codEditora === codEditora);
    return editora ? editora.nome : 'Editora não encontrada';
  }

  excluir(codigo: number): void {
    // Lógica para excluir o livro
  }

  ngOnInit(): void {
    // Lógica de inicialização
  }
}
