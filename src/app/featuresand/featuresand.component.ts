import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-featuresand',
  standalone: true,
  imports: [
    CommonModule,
    RouterLinkActive
    ],
  templateUrl: './featuresand.component.html',
  styleUrl: './featuresand.component.css'
})
export class FeaturesandComponent {
  items = [
    {
      iconClass: 'bi bi-alarm', // replace with actual icon classes
      title: '200+ مشروع',
      text: 'نص توضيحي',
      footerText: 'متاح'
    },
    {
    iconClass: 'bi bi-alarm', // replace with actual icon classes
    title: '200+ مشروع',
    text: 'نص توضيحي',
    footerText: 'متاح'
    },
    {
      iconClass: 'bi bi-alarm', // replace with actual icon classes
      title: '200+ مشروع',
      text: 'نص توضيحي',
      footerText: 'متاح'
    }
  ];
}

