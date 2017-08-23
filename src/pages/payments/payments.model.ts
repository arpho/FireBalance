import { FormControl } from '@angular/forms';
export class PaymentsModel {
    nome: string;
    note: string;
    addebito: string;
    constructor(payment?:{nome:FormControl,
                addebito: FormControl,
                note: FormControl}){
        this.nome = payment && payment.nome.value ||"";
        this.addebito = payment && payment.addebito.value || "";
        this.note = payment && payment.note.value || "";

    }
}