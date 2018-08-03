import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  addForm(contactFormName, contactFormEmail, contactFormSubject, contactFormMessage) {
    console.log(contactFormName)
    console.log(contactFormEmail)
    console.log(contactFormSubject)
    console.log(contactFormMessage)

    let newEmail = {
      contactFormName: contactFormName,
      contactFormEmail: contactFormEmail,
      contactFormSubject: contactFormSubject,
      contactFormMessage: contactFormMessage,
    };
    console.log(newEmail);
    this.http.post('http://localhost:4000/send', newEmail)
      .subscribe(res => console.log("Blog Submitted!"));
      console.log("hello")
  }
}
