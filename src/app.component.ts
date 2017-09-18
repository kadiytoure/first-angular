import { Component } from "@angular/core";

/**
 * Les components sont les contrôleurs de Angular
 * Ce sont des classes sensées être liés à un template
 * html et qui déclarent en leur sein les propriétés et méthodes 
 * accessibles au template en question.
 */





@Component({
    /*Le selecteur indique la balise html sensée être liée 
    à ce component. Si angular voit un <mon-app></mon-app>
    dans le html, il viendra y mettre le AppComponent
    */
    selector: 'mon-app',
    /*le template correspond à la vue, c'est là où on 
    mettra le html du component
    */
    template: '<h1>{{message}}</h1>'
})
export class AppComponent {
private Message:string;
}