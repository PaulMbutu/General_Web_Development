import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

interface NavItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-header',
  standalone
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
