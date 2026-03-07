import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface Project {
    title: string;
    description: string;
    technologies: string[];
    liveUrl?: string;
    codeUrl?: string;
}

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    private projects: Project[] = [
        {
            title: 'Personal Portfolio',
            description: 'A personal portfolio website built with Angular to showcase my projects and skills.',
            technologies: ['Angular', 'TypeScript', 'SCSS'],
            liveUrl: 'https://myportfolio.com',
            codeUrl: 'https://github.com/myusername/myportfolio'
        },
        {
            title: 'Personal Portfolio',
            description: 'A personal portfolio website built with Angular to showcase my projects and skills.',
            technologies: ['Angular', 'TypeScript', 'SCSS'],
            liveUrl: 'https://myportfolio.com',
            codeUrl: 'https://github.com/myusername/myportfolio'
        },

    ];

    getProjects() {
        return of(this.projects);
    }
}