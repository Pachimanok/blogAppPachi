import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {

  
  posts = [];
  name: any;
  postView: any;

  constructor( private http: HttpClient) { }

  ngOnInit() {

      this.http.get<any>('https://blog.rail.ar/api/posts').subscribe(res => {
      console.log(res);
      this.posts = res;
    })
  }

}
