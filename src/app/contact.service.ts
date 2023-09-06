import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from './contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

// this will talk to BackEnd Restapis like spring boot app
// login to connect spring boot app
export class ContactService {
  private restUrl = 'http://localhost:9090/contact';

  constructor(private httpclient: HttpClient) {}

  createContact(contact: Contact): Observable<string> {
    return this.httpclient.post(this.restUrl, contact, {
      responseType: 'text',
    });
  }
}
