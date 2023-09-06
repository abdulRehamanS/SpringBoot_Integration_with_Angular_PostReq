import { Component } from '@angular/core';
import { Contact } from './contact';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

// component class is like controller
// request will be coming here
// this is should have @autowired with service class
export class AppComponent {
  title = 'IntegrationWithPostReq';

  // creating Obj of contact
  contact: Contact = new Contact();

  // inject service class here in the controller
  constructor(private service: ContactService) {}
  msg: string = '';

  // writing method for saveContact
  saveContact() {
    this.service.createContact(this.contact).subscribe((respose) => {
      this.msg = respose;
    });
  }
}
