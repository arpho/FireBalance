import { Observable } from 'rxjs/Rx';
export interface DbLayer {
    getElements(): Observable<any>
    getElementById(id:string): Observable<any>
}