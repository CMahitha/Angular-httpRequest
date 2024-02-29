import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {
  private apiUrl = 'https://your-api-url.com/add'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) { }

  addNumbers(a: number, b: number): Observable<number> {
    return this.http.post<number>(this.apiUrl, { a, b });
  }
}
