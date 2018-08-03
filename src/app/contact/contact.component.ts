import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NgForm } from '@angular/forms';

import { AppService } from '../app.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private appservice: AppService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.contactForm = this.fb.group({
      contactFormName: ['', Validators.required ],
      contactFormEmail: ['', Validators.required ],
      contactFormSubject: ['', Validators.required ],
      contactFormMessage: ['', Validators.required ]
    });
  }

  reset() {
    this.contactForm.reset();
  }

  addForm(contactFormName, contactFormEmail, contactFormSubject, contactFormMessage) {
    this.appservice.addForm(contactFormName, contactFormEmail, contactFormSubject, contactFormMessage);
    this.contactForm.reset();
    alert("Thank you! Your message has been sent")
  }

}
