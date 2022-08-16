// Angular imports
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
// Local imports
import {Customer} from '../model/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = 'http://localhost:8000/customer';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.http.get<any>(this.baseUrl);
  }

  get(id: number): Observable<Customer> {
    return this.http.get<any>(this.baseUrl + '/' + id);
  }

  create(customer: Customer) {
    customer.id=Math.random();

    return this.http.post<any>(this.baseUrl, customer);
  }

  update(id: number, customer: Customer): Observable<Customer> {
    return this.http.put<any>(this.baseUrl + '/' + id, customer);
  }

  delete(id: number) {
    return this.http.delete<any>(this.baseUrl + '/' + id);
  }
}
