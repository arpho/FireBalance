
import { Timestamp } from 'rxjs/Rx';
export class ItemModel {
    prezzo: number;
    barcode: string;
    nome: string;
    descrizione: string;
    picture: string
    categorieId: Array<string>;
    tassoConversione:number;
    moneta:string
}
export class ShoppingCartModel {
    fornitoreId: string;
    pagamentoId: string;
    datacontabile: Timestamp<any>;
    dataFiscale: Timestamp<any>;
    acquisti: Array<ItemModel>;
    key:string;
}
export class PurchaisedModel{

}