import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL = environment.apiURL

  constructor(private http: HttpClient) {

  }

  // all the API routes goes here

  login(user:any) {
    return this.http.get<Observable<any>>(this.apiURL + 'user?username=' + user.username + '&password=' + user.password);
  }

  getNotes() {
    return this.http.get<Observable<any>>(this.apiURL + 'notes');
  }

  addEditNote(req: any) {
    return req.id ? this.http.put<Observable<any>>(this.apiURL + 'notes/' + req.id, req) : this.http.post<Observable<any>>(this.apiURL + 'notes', req);
  }

  deleteNote(Id: any) {
    return this.http.delete<Observable<any>>(this.apiURL + 'notes/' + Id);
  }

}
