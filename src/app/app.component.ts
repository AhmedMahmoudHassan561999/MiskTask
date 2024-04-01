import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Header/header/header.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { BodyComponent } from './body/body/body.component';
import { FeaturesandComponent } from './featuresand/featuresand.component';
import { AboutComponent } from './aboutsus/about/about.component';
import { CategoryComponent } from './category/category/category.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { ReviewsComponent } from './reviews/reviews/reviews.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    CommonModule,
    NavbarComponent,
    BodyComponent,
    FeaturesandComponent,
    AboutComponent,
    CategoryComponent,
    LayoutComponent,
    ReviewsComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MiskTask';
}
