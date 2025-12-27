import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { Observable } from 'rxjs'; // Import Observable

@Injectable({
  providedIn: 'root' // Make the service available globally
})
export class UserService {
  private apiUrl: string = 'https://jsonplaceholder.typicode.com/users'; // API endpoint

  constructor(private http: HttpClient) { }

  // Method to fetch users from the API
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl); // Return an Observable of an array of users
  }
}
