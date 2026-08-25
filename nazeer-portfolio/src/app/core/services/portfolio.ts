import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Project {
  id: string;
  slug: string;
  title: string;
  summary: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

export interface Experience {
  id: string;
  organization: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
}

@Injectable({
  providedIn: 'root',
})
export class Portfolio {
  private http = inject(HttpClient);

  // Writable Signals
  projects = signal<Project[]>([]);
  experience = signal<Experience[]>([]);

  // Computed Signal for the Homepage
  featuredProjects = computed(() => this.projects().slice(0, 3));

  constructor() {
    this.loadProjects();
    this.loadExperience();
  }

  private loadProjects() {
    this.http.get<Project[]>('/content/projects.json').subscribe({
      next: (data) => this.projects.set(data),
      error: (err) => console.error('Failed to load projects', err)
    });
  }

  private loadExperience() {
    this.http.get<Experience[]>('/content/experience.json').subscribe({
      next: (data) => this.experience.set(data),
      error: (err) => console.error('Failed to load experience', err)
    });
  }
}