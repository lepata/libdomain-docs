import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { News } from '../news';
import { NewsService } from '../news.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-news-short',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './news-short.component.html',
  styleUrl: './news-short.component.scss'
})
export class NewsShortComponent {
  @Input() News!: News;
}
