import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    this.contarTres().then(
      mensaje => console.log('Termino', mensaje)
    ).catch( error => console.error('Error de promesa', error));
  }

  ngOnInit(): void {
  }

  contarTres(): Promise<boolean> {
    return new Promise( (resolve, reject) => {

      let contador = 0;

      const intervalo = setInterval( () => {
        contador ++;
        console.log(contador);
        if (contador === 3) {
          resolve(true);
          // reject('simple error');
          clearInterval(intervalo);
        }
      }, 1000);
    });
  }

}
