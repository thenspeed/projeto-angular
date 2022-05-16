import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-trasnferencia',
  templateUrl: './nova-trasnferencia-component.html',
  styleUrls: ['./nova-trasnferencia.componente.scss'],
})
export class NovaTrasnferenciaComponent {
  transferir() {
    console.log('Formulario recebido');
  }
}
