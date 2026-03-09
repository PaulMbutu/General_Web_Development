import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

interface NavItem {
  label: string;
  targetId: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent implements OnInit {
  navItems: NavItem[] = [
    { label: 'Home', targetId: 'home' },
    { label: 'About', targetId: 'about' },
    { label: 'Projects', targetId: 'projects' },
    { label: 'Skills', targetId: 'skills' },
    { label: 'Experience', targetId: 'experience' },
    { label: 'Contact', targetId: 'contact' }
  ];

  isMenuOpen = false;
  activeSection = 'hero';
  isScrolled = false;

  ngOnInit(): void {
    this.observeSections();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });  
      this.isMenuOpen = false;
    }
  }
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 10;
  }

  private observeSections() {
    const options: IntersectionObserverInit = {
      root: null,
      threshold: 0.5
    };
  
    const observer = new IntersectionObserver(
                                                (entries) => {
                                                                entries.forEach(entry => {
                                                                  if (entry.isIntersecting && entry.target.id) {
                                                                    this.activeSection = entry.target.id;
                                                                  }
                                                                });
                                                              },
                                                options
                                              );
    setTimeout(() => {
      this.navItems.forEach(item => {
        const el = document.getElementById(item.targetId);
        if (el) {
          observer.observe(el);
        }
      });
    }, 300);
  }
  }
