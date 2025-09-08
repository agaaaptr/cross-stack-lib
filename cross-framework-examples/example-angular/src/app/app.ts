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
    { id: 5, framework: 'Ember', year: 2011, creator: 'Yehuda Katz' },
    { id: 6, framework: 'Backbone', year: 2010, creator: 'Jeremy Ashkenas' },
    { id: 7, framework: 'Preact', year: 2013, creator: 'Jason Miller' },
    { id: 8, framework: 'Mithril', year: 2014, creator: 'Leo Horie' },
    { id: 9, framework: 'Polymer', year: 2013, creator: 'Google' },
    { id: 10, framework: 'Aurelia', year: 2015, creator: 'Rob Eisenberg' },
    { id: 11, framework: 'Riot.js', year: 2014, creator: 'Tero Piirainen' },
    { id: 12, framework: 'Next.js', year: 2016, creator: 'Vercel' },
    { id: 13, framework: 'Nuxt.js', year: 2016, creator: 'Alexandre Chopin' },
    { id: 14, framework: 'Gatsby', year: 2015, creator: 'Kyle Mathews' },
    { id: 15, framework: 'SolidJS', year: 2018, creator: 'Ryan Carniato' },
    { id: 16, framework: 'Qwik', year: 2021, creator: 'Builder.io' },
    { id: 17, framework: 'Lit', year: 2019, creator: 'Google' },
    { id: 18, framework: 'Alpine.js', year: 2019, creator: 'Caleb Porzio' },
    { id: 19, framework: 'Stimulus', year: 2018, creator: 'Basecamp' },
    { id: 20, framework: 'HTMX', year: 2020, creator: 'Carson Gross' },
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