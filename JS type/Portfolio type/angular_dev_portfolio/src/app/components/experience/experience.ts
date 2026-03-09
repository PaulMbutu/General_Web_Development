import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ExperienceItem {
  title: string;
  subtitle: string;
  period: string;
  description: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceComponent {
  experience: ExperienceItem[] = [
    {
      title: 'Title',
      subtitle: 'Company',
      period: 'Start - Finish',
      description: 'Experience description.',
    },
    {
      title: 'Title',
      subtitle: 'Company',
      period: 'Start - Finish',
      description: 'Experience description.',
    },
    {
      title: 'Title',
      subtitle: 'Company',
      period: 'Start - Finish',
      description: 'Experience description.',
    },
    {
      title: 'Title',
      subtitle: 'Company',
      period: 'Start - Finish',
      description: 'Experience description.',
    }
  ]
}
