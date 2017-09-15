
import { Timestamp } from 'rxjs/Rx';
export class ItemModel {
    id:string;
    prezzo: number;
    barcode: string;
    nome: string;
    descrizione: string;
    picture: string
    categorieId: string[];
    tassoConversione: number;
    moneta: string;
    key: String;
    quantita:string;
    constructor() {
        this.prezzo =  0;
        this.barcode =  '';
        this.descrizione = '';
        this.picture =  '';
        this.categorieId =  [];
        this.tassoConversione =  1;
        this.moneta = '€';
        this.key =  '';
        this.quantita = '';
    }

    build(item: {prezzo:number,
                 barcode:string,
                descrizione:string,
                picture:string,
                categorieId:string[],
                key:string,
                moneta:string,
                quantita:string,
                tassoConversione:number}) {
        this.prezzo = item && item.prezzo || 0;
        this.barcode = item && item.barcode || '';
        this.descrizione = item && item.descrizione || '';
        this.picture = item && item.picture || '';
        this.categorieId = item && item.categorieId || [];
        this.tassoConversione = item && item.tassoConversione || 1;
        this.moneta = item && item.moneta || '€';
        this.key = item && item.key || '';
        this.quantita = item && item.quantita||'';
        return this;
    }
}
export class ShoppingCartModel {
    fornitoreId: string;
    totale: number;
    pagamentoId: string;
    moneta:string;
    tassoConversione;number;
    dataAcquisto: string;
    onLine: boolean;
    dataAddebito: string;
    items: Array<ItemModel>;
    key: string;
    constructor() {
        this.fornitoreId = "";
        this.pagamentoId = "";
        this.moneta = "€"
        this.onLine = false;
        this.tassoConversione = Number(1);
        this.dataAcquisto = new Date().toISOString();
        this.dataAddebito = new Date().toISOString();
        this.items = [];
        this.key = "";
    }
    build(shoppingCart: {
        fornitoreId: string,
        pagamentoId: string,
        dataAcquisto: string,
        dataAddebito: string,
        online:boolean
        totale:number,
        key: string,
        items: [ItemModel],
    }) {
        this.fornitoreId = shoppingCart.fornitoreId || "";
        this.pagamentoId = shoppingCart.pagamentoId || "";
        this.dataAcquisto = shoppingCart.dataAcquisto || new Date().toISOString();
        this.dataAddebito = shoppingCart.dataAddebito || new Date().toISOString();
        this.totale = shoppingCart.totale|| 0;
        this.onLine = shoppingCart.online;
        this.items = shoppingCart.items || [];
        this.key = shoppingCart.key || "";
        return this;
    }
}