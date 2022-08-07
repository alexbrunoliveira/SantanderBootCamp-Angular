import { Component, Input, OnChanges, } from "@angular/core";


@Component ({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']// escondendo as estrelas 
    
})
export class StarComponent implements OnChanges { // O ng-change directiva diz AngularJS o que fazer quando o valor de um elemento HTML mudanças.

    @Input()                                       // variável fica elegível p receber informações do componente externo
    rating: number = 0;

    starWidth: number; // variável q irá esconder parte da variável da estrela.

    // efetivando o cálculo da proporção da div exibida para media do curso.
    ngOnChanges(): void {
        this.starWidth = this.rating * 74 / 5; // Caso ñ funcione o calculo,  basta trocar para this.starWidth = this.rating * 94 / 5
    }

}