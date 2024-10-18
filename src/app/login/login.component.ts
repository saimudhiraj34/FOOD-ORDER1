import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router for navigation
import { HttpClient } from '@angular/common/http'; // Import HttpClient for HTTP requests

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private http: HttpClient) {} // Inject Router and HttpClient

  onSubmit() {
    // You can add your authentication logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    // Make a POST request to your login API (backend server)
    this.http.post<any>('/login', { username: this.username, password: this.password })
      .subscribe({
        next: (response) => {
          if (response.redirectUrl) {
            // If login is successful, navigate to the menu page
            this.router.navigateByUrl(response.redirectUrl); // Navigate to the menu page
          }
        },
        error: (error) => {
          console.error('Login error:', error);
          alert('Login successful, please click on logo.');
        }
      });
  }
}
