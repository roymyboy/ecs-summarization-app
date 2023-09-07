import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ApiService } from './service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecs-summarization-app';
  urlInput: string = ''; //url input form user
  showError = false; // Tracks whether to show the error message
  summary: string | null = null; // Variable to store the summary

  // Define style-related properties with initial values
  availableFonts: string[] = ['Arial', 'Helvetica', 'Times New Roman', 'Georgia', 'Verdana'];
  selectedFont: string = 'Arial'; // Set a default font

  constructor(private apiService: ApiService) {}

  summaryUrl() {
    const url = this.urlInput.trim();
    console.log(url);
    this.apiService.getSummary(url).subscribe(
      (data: any) => {
        // Handle the API response and extract the summary
        this.summary = data.summary;
        this.showError = false; // Reset error state
      },
      (error) => {
        console.error('API Error:', error);
        this.showError = true; // Show error message
      }
    );
  }

  applyStyles() {
    // Apply styles to the textarea content using the selected values (e.g., this.fontSize, this.lineHeight, etc.).
    // You can set the styles dynamically based on user input.
  }
}
