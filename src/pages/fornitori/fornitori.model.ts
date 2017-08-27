import { FormControl } from '@angular/forms';
export class SupplierModel {
    nome: string;
    note: string;
    indirizzo: string;
    latitudine: string;
    longitudine: string;
    onLine: boolean;
    constructor(fornitore?:{
        nome: FormControl,
        note: FormControl,
        indirizzo: FormControl,
        longitudine: FormControl,
        latitudine: FormControl,
        onLine: boolean
    }) {
            this.nome = fornitore && fornitore.nome.value||"";
            this.note = fornitore && fornitore.note.value ||"";
            this.indirizzo = fornitore && fornitore.indirizzo.value ||"";
            this.latitudine = fornitore && fornitore.latitudine.value || "";
            this.longitudine = fornitore && fornitore.longitudine.value || "";
            this.onLine = fornitore && fornitore.onLine || false;
        }
}
