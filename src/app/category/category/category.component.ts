import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    CommonModule,
    RouterLinkActive
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  slides = [
    { img: 'assets/images/people.jpg',
     title: 'الدورات التأهلية ',
      text: 'دبلومة ادارة الموارد البشرية' 
    },
    { img: 'assets/images/people.jpg',
    title: 'الدورات التأهلية ',
    text: 'دبلومة ادارة الموارد البشرية' 
   },
   { img: 'assets/images/people.jpg',
   title: 'الدورات التأهلية ',
   text: 'دبلومة ادارة الموارد البشرية' 
  },
  { img: 'assets/images/people.jpg',
  title: 'الدورات التأهلية ',
  text: 'دبلومة ادارة الموارد البشرية' 
 },
 { img: 'assets/images/people.jpg',
 title: 'الدورات التأهلية ',
 text: 'دبلومة ادارة الموارد البشرية'  
    },

    // ...more slides
  ];
}
