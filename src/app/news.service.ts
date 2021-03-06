import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';

const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;

@Injectable({
    providedIn: 'root'
})
export class NewsService {

    public currentArticle;

    constructor(private http: HttpClient) {
    }

    getData(url: string) {
        return this.http.get(`${API_URL}/${url}&apiKey=${API_KEY}`);
    }
}
