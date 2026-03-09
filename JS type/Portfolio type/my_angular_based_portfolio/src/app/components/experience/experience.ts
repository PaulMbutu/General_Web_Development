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
      title: 'Software Engineer',
      subtitle: 'Freelance',
      period: 'Jan 2020 - Present',
      description: 'Working on developing and maintaining web applications using Angular among other technologies.',
    },
    {
      title: 'Transccriptionist',
      subtitle: 'REV',
      period: 'Jun 2021 - Dec 2022',
      description: 'Focused on transcription and data entry tasks.'
    }
  ]
}
