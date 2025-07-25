import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Import the custom elements to register them
import 'cross-stack-lib/csl-table';
import 'cross-stack-lib/csl-modal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1>Angular with Cross-Stack Lib</h1>

    <div style="margin-bottom: 40px;">
      <h2>Table Component</h2>
      <csl-table [columns]="tableColumnsJson" [data]="tableDataJson" [pageSize]="3"></csl-table>
    </div>

    <div>
      <h2>Modal Component</h2>
      <button (click)="isModalOpen = true" style="padding: 8px 16px; background-color: #a6120d; color: white; border: none; border-radius: 4px; cursor: pointer;">
        Open Modal
      </button>
      <csl-modal [open]="isModalOpen" (close)="isModalOpen = false">
        <div slot="header">Angular Modal Header</div>
        <div slot="body">
          <p>This is a modal inside an Angular app!</p>
        </div>
        <div slot="footer" style="display: flex; justify-content: flex-end; gap: 10px;">
          <button (click)="isModalOpen = false" style="padding: 8px 16px; background-color: #ccc; border: none; border-radius: 4px; cursor: pointer;">
            Close
          </button>
        </div>
      </csl-modal>
    </div>
  `,
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Allow custom elements
})
export class AppComponent {
  title = 'example-angular';
  isModalOpen = false;

  tableColumns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
  ];

  tableData = [
    { id: 1, name: 'Angular User 1', email: 'angular1@example.com' },
    { id: 2, name: 'Angular User 2', email: 'angular2@example.com' },
    { id: 3, name: 'Angular User 3', email: 'angular3@example.com' },
    { id: 4, name: 'Angular User 4', email: 'angular4@example.com' },
    { id: 5, name: 'Angular User 5', email: 'angular5@example.com' },
  ];

  get tableColumnsJson() {
    return JSON.stringify(this.tableColumns);
  }

  get tableDataJson() {
    return JSON.stringify(this.tableData);
  }
}
