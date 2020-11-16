import { Component, OnInit } from "@angular/core";
import { ActionSheetController } from "@ionic/angular";

@Component({
  selector: "app-pagina-acciones",
  templateUrl: "./pagina-acciones.page.html",
  styleUrls: ["./pagina-acciones.page.scss"],
})
export class PaginaAccionesPage implements OnInit {
  constructor(public actionSheetController: ActionSheetController) {}
  //Definimos una funcion asincrona con async.
  //Esto quiere decir que puede haber llamadas a elementos asincronos
  //Cuando llamamos a uno de estos elementos podemos citar la palabra
  //await para que el metodo espere la finalizacion de este elemento
  //para continuar
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: "Albums",
      cssClass: "my-custom-class",
      buttons: [
        {
          text: "Delete",
          role: "destructive",
          icon: "trash",
          handler: () => {
            console.log("Delete clicked");
          },
        }, {
          text: 'Share',
          icon: 'share',
          handler: () => {
            console.log('Share clicked');
          }
        }, {
          text: 'Play (open modal)',
          icon: 'caret-forward-circle',
          handler: () => {
            console.log('Play clicked');
          }
        }, {
          text: 'Favorite',
          icon: 'heart',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Cancel',
          icon: 'albums',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ],
    });
    await actionSheet.present();
  }

  ngOnInit() {}
}
