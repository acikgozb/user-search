import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

interface User {
  name: string;
  username: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getUsersByName(name: string): Observable<User[]> {
    return this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users?name_like=${name}`);
  }
}
