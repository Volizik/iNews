import {Component, OnInit} from '@angular/core';
import {NewsService} from '../news.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
    selector: 'app-news',
    templateUrl: './news.page.html',
    styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

    news$: Observable<any>;

    constructor(private newsService: NewsService, private router: Router) {
    }

    ngOnInit() {
        this.news$ = this.newsService.getData('everything?domains=wsj.com');
    }

    onGoToSinglePage(article: object) {
        this.newsService.currentArticle = article;
        this.router.navigate(['/news-single']);
    }

}
