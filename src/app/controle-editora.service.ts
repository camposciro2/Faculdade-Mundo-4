import { Injectable } from '@angular/core';
import { Editora } from './editora'; // substitua com o caminho correto para o arquivo editora.ts

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  // Atributo editoras
  editoras: Array<Editora> = [
    { codEditora: 1, nome: 'Editora 1' },
    { codEditora: 2, nome: 'Editora 2' },
    { codEditora: 3, nome: 'Editora 3' }
  ];

  // Método getEditoras
  getEditoras() {
    return this.editoras;
  }

  // Método getNomeEditora
  getNomeEditora(codEditora: number) {
    let editora = this.editoras.filter(e => e.codEditora === codEditora);
    return editora.length > 0 ? editora[0].nome : null;
  }
}
