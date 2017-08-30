export class CategoryModel {
    title:string;
    icon:string;
    id:string;
    buildCategory(categoria?:any) {
        this.title = categoria && categoria.title || null;
        this.icon = categoria && categoria.icon ||  null;
        this.id = categoria && categoria.id ||  null;
        return this;
    }
}