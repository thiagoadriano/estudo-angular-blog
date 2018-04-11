import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from '../../providers/blog.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {
  post:any = {};
  constructor(
    public activateRoute: ActivatedRoute,
    public router:Router,
    public blog: BlogService
  ) { 
    this.activateRoute.params.subscribe( params => {
      let id = Number(params['id']);
      this.blog.post(id).then((post:any) => {
        this.post = post;
      }).catch((e) => {
        console.error(e);
        this.router.navigate(['/404']);
      });
    });
  }

  ngOnInit() {
  }

}
