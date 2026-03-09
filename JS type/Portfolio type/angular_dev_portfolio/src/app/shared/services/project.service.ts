import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface Project {
    title: string;
    description: string;
    technologies: string[];
    liveUrl?: string;
    codeUrl?: string;
}
export interface Services {
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
            title: 'Awesome Project ',
            description: 'An amazing project that utilises several technologies to deliver functionality and results.',
            technologies: ['Angular', 'TypeScript', 'SCSS'],
            liveUrl: 'https://awsomeproject.com',
            codeUrl: 'https://github.com/myusername/awsomeproject'
        },
        {
            title: 'Awesome Project ',
            description: 'An amazing project that utilises several technologies to deliver functionality and results.',
            technologies: ['Angular', 'TypeScript', 'SCSS'],
            liveUrl: 'https://awsomeproject.com',
            codeUrl: 'https://github.com/myusername/awsomeproject'
        },
        {
            title: 'Awesome Project ',
            description: 'An amazing project that utilises several technologies to deliver functionality and results.',
            technologies: ['Angular', 'TypeScript', 'SCSS'],
            liveUrl: 'https://awsomeproject.com',
            codeUrl: 'https://github.com/myusername/awsomeproject'
        },
        {
            title: 'Awesome Project ',
            description: 'An amazing project that utilises several technologies to deliver functionality and results.',
            technologies: ['Angular', 'TypeScript', 'SCSS'],
            liveUrl: 'https://awsomeproject.com',
            codeUrl: 'https://github.com/myusername/awsomeproject'
        },
        {
            title: 'Awesome Project ',
            description: 'An amazing project that utilises several technologies to deliver functionality and results.',
            technologies: ['Angular', 'TypeScript', 'SCSS'],
            liveUrl: 'https://awsomeproject.com',
            codeUrl: 'https://github.com/myusername/awsomeproject'
        },
        {
            title: 'Awesome Project ',
            description: 'An amazing project that utilises several technologies to deliver functionality and results.',
            technologies: ['Angular', 'TypeScript', 'SCSS'],
            liveUrl: 'https://awsomeproject.com',
            codeUrl: 'https://github.com/myusername/awsomeproject'
        },

    ];

    private services: Services[]= [];

    getProjects() {
        return of(this.projects);
    }
}