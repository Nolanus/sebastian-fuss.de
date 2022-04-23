import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  private formUrl = 'http://mail.sebastian-fuss.de/hi';

  @ViewChild('form', { read: NgForm })
  form!: NgForm;

  public input = {
    name: '',
    email: '',
    text: ''
  };

  public status: string|null = null;
  public sending: boolean = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  public sendMessage(): void {
    this.form.form.markAllAsTouched();

    if (this.form.invalid) {
      return
    }

    this.status = null;
    this.sending = true;

    this.http.post(this.formUrl, this.input, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .subscribe(
        (data: any) => {
          this.sending = false;
          this.input.text = '';
          this.status = '';
        },
        (error: any) => {
          this.sending = false;
          this.status = ContactComponent.extractErrorMessage(error);
        });
  }

  private static extractErrorMessage(error: any) {
    if (error.message) {
      return error.message;
    } else if (error.error.message) {
      return error.error.message;
    } else {
      return `Backend returned code ${error.status}, content was: ${error.error}`;
    }
  }
}
