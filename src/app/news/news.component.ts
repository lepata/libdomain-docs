import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { News } from '../news';
import { NewsService } from '../news.service';
import { NewsShortComponent } from '../news-short/news-short.component';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [ CommonModule, NewsShortComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  NewsList: News[] = [];
  newsService: NewsService = inject(NewsService);

  constructor() {
    this.NewsList = this.newsService.getAllNews();
  }
}
