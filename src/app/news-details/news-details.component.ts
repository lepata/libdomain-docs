import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { News } from '../news';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-details',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './news-details.component.html',
  styleUrl: './news-details.component.scss'
})
export class NewsDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  newsService: NewsService = inject(NewsService);
  News: News | undefined;
    constructor(private titleService: Title, private meta: Meta) {
        const NewsId = Number(this.route.snapshot.params['id']);
        this.News = this.newsService.getNewsById(NewsId);
        this.titleService.setTitle(this.newsService.getNewsTitleById(NewsId));
        this.meta.updateTag({ name: 'description', content: 'How to use Angular 4 meta service' });
    }
}
