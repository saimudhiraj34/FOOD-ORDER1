import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  private apiUrl = 'http://localhost:4200/register'; // Correct URL for your Express API


  constructor(private http: HttpClient) {}

  onRegister(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const username = form.value.username;
    const password = form.value.password;
    console.log('User Registered:', username, password);

    this.http.post(this.apiUrl, { username, password })
      .subscribe(response => {
        console.log('Registration Response:', response);
      }, error => {
        console.error('Registration Error:', error);
      });
  }
}
