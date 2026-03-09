import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Skill {
  name: string;
  iconClass: string;
  level: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent {
  skills: Skill[] = [
    { name: 'Git',        iconClass: 'fa-brands fa-git',        level: 'Intermediate' },
    { name: 'JavaScript', iconClass: 'fa-brands fa-js',         level: 'Advanced' },
    { name: 'TypeScript', iconClass: 'fa-brands fa-square-js',  level: 'Advanced' },
    { name: 'Python',     iconClass: 'fa-brands fa-python',     level: 'Advanced' },
    { name: 'C++',        iconClass: 'fa-solid fa-code',        level: 'Advanced' },
    { name: 'MQL5',       iconClass: 'fa-solid fa-chart-line',  level: 'Advanced' },
    { name: 'React',      iconClass: 'fa-brands fa-react',      level: 'Intermediate' },
    { name: 'Vue',        iconClass: 'fa-brands fa-vuejs',      level: 'Intermediate' },
    { name: 'Angular',    iconClass: 'fa-brands fa-angular',    level: 'Advanced' },
    { name: 'Streamlit',  iconClass: 'devicon-streamlit-plain colored',         level: 'Intermediate' },
    { name: 'Django',     iconClass: 'devicon-django-plain colored',            level: 'Intermediate' },
    { name: 'NextJs',     iconClass: 'devicon-nextjs-plain-wordmark colored',   level: 'Intermediate' }
  ];
}
