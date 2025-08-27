// src/app/app.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: false // Explicitly set to false
})
export class App {
  isModalOpen = false;

  tableData = [
    { id: 1, framework: 'React', year: 2013, creator: 'Facebook' },
    { id: 2, framework: 'Angular', year: 2016, creator: 'Google' },
    { id: 3, framework: 'Vue', year: 2014, creator: 'Evan You' },
    { id: 4, framework: 'Svelte', year: 2016, creator: 'Rich Harris' },
  ];

  tableColumns = [
    { key: 'id', label: 'ID' },
    { key: 'framework', label: 'Framework' },
    { key: 'year', label: 'Year' },
    { key: 'creator', label: 'Creator' },
  ];

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}