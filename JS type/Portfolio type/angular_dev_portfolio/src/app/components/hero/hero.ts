import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent{
  scrollToProjects() {
    document.getElementById('projects')?.scrollIntoView(
      { behavior: 'smooth',block: 'start' }
    );
  }
}
