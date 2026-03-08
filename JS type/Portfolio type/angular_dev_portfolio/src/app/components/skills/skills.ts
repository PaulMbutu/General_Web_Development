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
    { name: 'JavaScript', iconClass: 'fa-brands fa-angular',  level: 'Advanced' },
    { name: 'TypeScript', iconClass: 'fa-brands fa-typescript',  level: 'Advanced' },
    { name: 'Angular',    iconClass: 'fa-brands fa-angular',   level: 'Advanced' },
    { name: 'React',      iconClass: 'fa-brands fa-react',    level: 'Intermediate' },
    { name: 'Git',        iconClass: 'fa-brands fa-git',         level: 'Intermediate' }
  ];
}
