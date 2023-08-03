import { Injectable } from '@angular/core';
import { Livro } from './livro'; // substitua com o caminho correto para o arquivo livro.ts

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  // Atributo livros
  livros: Array<Livro> = [
    { codigo: 1, codEditora: 1, titulo: 'Livro 1', resumo: 'Resumo do Livro 1', autores: ['Autor 1'] },
    { codigo: 2, codEditora: 2, titulo: 'Livro 2', resumo: 'Resumo do Livro 2', autores: ['Autor 2'] },
    { codigo: 3, codEditora: 3, titulo: 'Livro 3', resumo: 'Resumo do Livro 3', autores: ['Autor 3'] }
  ];

  // Método obterLivros
  obterLivros() {
    return this.livros;
  }

  // Método incluir
  incluir(livro: Livro) {
    const maxCodigo = Math.max(...this.livros.map(l => l.codigo));
    livro.codigo = maxCodigo + 1;
    this.livros.push(livro);
  }

  // Método excluir
  excluir(codigo: number) {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}
