import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.page.html',
  styleUrls: ['./post-view.page.scss'],
})
export class PostViewPage implements OnInit {

  postId: any;
  post: any;

  constructor(private activatedRoute: ActivatedRoute, private http:HttpClient) { }

  ngOnInit() {

    this.postId = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get('https://blog.rail.ar/api/posts/'+ this.postId).subscribe(res=>{
      console.log(res);
      this.post = res;
    });

  }

}
