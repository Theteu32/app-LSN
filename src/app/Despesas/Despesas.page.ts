import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-despesas',
  templateUrl: 'Despesas.page.html',
  styleUrls: ['Despesas.page.scss'],
})
export class DespesasPage {
  produtos: any[] = [];

  constructor(private toastController: ToastController) {}

  adicionarItem() {
    this.produtos.push({ nome: '', quantidade: 0, preco: 0.0 });
  }

  removerItem(index: number) {
    if (index >= 0 && index < this.produtos.length) {
      this.produtos.splice(index, 1);
    }
  }

  async mostrarMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }
}
