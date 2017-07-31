export class ListingModel {
  shoppingCarts: Array<ListingItemModel>;
  categories: Array<ListingItemModel>;
  banner_title: string;
  banner_image: string;
}
export class Categoria{
  label:string;
  immagine:string;
  id:string;
}
export class Conti{
  id:string;
  label:string;
  acquisti:Array<ShoppingCart>;
}
export class ListingItemModel {
  titolo: string;
  imamagine: string;
  id: string;
  descrizione:string;
  barcode:string;
  prezzo:number;
  id_categorie:Array<string>;
}

export class CategoriesList{
  categorie: Array<Categoria>;
}
export class ShoppingCart{
  data: Date;
  id_fornitore:string;
  totale:number;
  articoli:Array<ListingItemModel>;
}
