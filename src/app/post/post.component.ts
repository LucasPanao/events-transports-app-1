import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../Iposts';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})

export class PostComponent implements OnInit {
  posts: Post[] = [];
  newPost: Post = {
    photo: '',
    name: '',
    date: '',
    value: 0,
    info: '',
    dateArrival: new Date(),
    dateDeparture: new Date(),
    schedules: '',
    cities: ''
  };
  editMode: boolean = false;
  currentPostId?: string;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }

  addPost() {
    const post = { ...this.newPost, date: new Date(this.newPost.date) };
    if (this.editMode && this.currentPostId) {
      this.postService.updatePost(this.currentPostId, post).then(() => {
        this.resetForm();
      });
    } else {
      this.postService.addPost(post).then(() => {
        this.resetForm();
      });
    }
  }

  resetForm() {
    this.newPost = {
      photo: '',
      name: '',
      date: '',
      value: 0,
      info: '',
      dateArrival: new Date(),
      dateDeparture: new Date(),
      schedules: '',
      cities: ''
    };
    this.editMode = false;
    this.currentPostId = undefined;
  }
}
