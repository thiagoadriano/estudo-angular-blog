import { BlogService } from './../../providers/blog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {
  loading:boolean = true;
  posts: any[];
  constructor(public blog:BlogService) { }

  ngOnInit() {
    this.blog.posts().then((posts:any[]) => {
      setTimeout(() => {
        this.posts = posts;
        this.loading = false;
      }, 1000);
    });
  }

}
