import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { post } from 'selenium-webdriver/http';
import { reject } from 'q';

const BASEURL = window.location.href;

@Injectable()
export class BlogService {
  getUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(
    public http:Http,
    public router:Router
  ) { }

  posts() {
    return new Promise((resolve, reject) => {
      this.http.get(this.getUrl).subscribe((data:any) => {
        let posts = JSON.parse(data._body);
        posts.map((post, i) => {
          posts[i].titleSlug = _.kebabCase(post.title);
          posts[i].router = '/' + posts[i].titleSlug + '/' + posts[i].id;
          posts[i].url = BASEURL + posts[i].router;
        });
        resolve(posts);
      }, (err) => {
        reject(err);
      });
    });
  }

  post(id:any) {
    return new Promise((resolve, reject) => {
      this.posts().then((posts: any[]) => {
        let post = _.find(posts, (p) => {
          return p.id === id;
        });
        return post ? resolve(post) : reject('post not found');
      });
    });
  }

}
