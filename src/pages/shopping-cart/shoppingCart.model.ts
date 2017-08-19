
import { Timestamp } from 'rxjs/Rx';
export class ItemModel {
    prezzo: number;
    barcode: string;
    nome: string;
    descrizione: string;
    immagine: string
    categorieId: Array<string>;
}
export class ShoppingCart {
    fornitoreId: string;
    pagamentoId: string;
    dataAcquisto: Timestamp<any>;
    dataContabile: Timestamp<any>;
    acquisti: Array<ItemModel>;
}