import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  searchItem: string = ''; // <-- Initialize the searchItem property

  search() {
    console.log('Searching for:', this.searchItem); // <-- Logs to console when the button is clicked
  }
}
