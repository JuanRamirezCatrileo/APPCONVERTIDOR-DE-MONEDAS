import { IfStmt } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent {
  cantidad = 0;
  tengo = 'USD';
  quiero= 'PESO CHILENO';
  total= 0;

  monedas: string[] = ['USD', 'EURO', 'PESO CHILENO']

    convertir(){
    
    switch(this.tengo)  {
      case 'USD':
        if(this.quiero ==='USD'){
          this.total = this.cantidad;
        }
        if(this.quiero === 'PESO CHILENO'){
            this.total = this.cantidad * 883.50
        }
        if(this.quiero === 'EURO'){
          this.total = this.cantidad * 0.95
        }
      break;
      case 'PESO CHILENO':
        if(this.quiero ==='USD'){
          this.total = this.cantidad * 0.0011
        }
        if(this.quiero === 'PESO CHILENO'){
            this.total = this.cantidad;
        }
        if(this.quiero === 'EURO'){
          this.total = this.cantidad * 0.0011
        }
      break;
      case 'EURO':
        if(this.quiero ==='USD'){
          this.total = this.cantidad * 1.06
        }
        if(this.quiero === 'PESO CHILENO'){
            this.total = this.cantidad * 993.74
        }
        if(this.quiero === 'EURO'){
          this.total = this.cantidad;
        }
      break;
    }
  }
  
}
