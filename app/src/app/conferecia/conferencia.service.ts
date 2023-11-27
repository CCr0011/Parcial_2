import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Conferencia } from './conferencia';
import { Observable } from 'rxjs';
@Injectable()
export class ConferenciaService {
   private apiUrl: string = environment.baseUrl + 'conferencias';
   constructor(private http: HttpClient) { }
    getConferencias(): Observable<Conferencia[]> {
        return this.http.get<Conferencia[]>(this.apiUrl);
    }
}
