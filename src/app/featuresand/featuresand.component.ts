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
      iconClass: 'icon', // replace with actual icon classes
      title: '99',
      text:'الدورات التأهلية',
      footerText: 'المزيد'
    },
    {
      iconClass: 'icon', // replace with actual icon classes
      title: '99',
      text:'الدورات التأهلية',
      footerText: 'المزيد'
    },
    {
      iconClass: 'icon', // replace with actual icon classes
      title: '99',
      text:'الدورات التأهلية',
      footerText: 'المزيد'
    }
  ];
}

