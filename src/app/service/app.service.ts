// Create a new Angular service to handle API requests (e.g., api.service.ts)

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8000/generate_summary';

  constructor(private http: HttpClient) {}

  // Function to make a POST request and return a summary
  getSummary(url: string): Observable<any> {
    // Construct the full URL with the 'url' parameter
    const fullUrl = `${this.apiUrl}?url=${url}`;
    console.log(fullUrl);
    // Make an HTTP GET request to the API
    return this.http.get(fullUrl);
  }
}
