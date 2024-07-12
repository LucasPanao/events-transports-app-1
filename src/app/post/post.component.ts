import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../IPosts';
import {MatSnackBar} from '@angular/material/snack-bar';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})

export class PostComponent implements OnInit {
  @Input() newPost: Post = {
    photo: '',
    name: '',
    date: '',
    value: 0,
    info: '',
    dateArrival: new Date(),
    scheduleSantos: '',
    schedulePraiaGrande: '',
    scheduleSaoVicente: '',
    scheduleCubatao: '',
    scheduleReturn: ''
  };
  @Input() editMode: boolean = false;
  @Input() currentPostId?: string;
  posts: Post[] = [];

  constructor(private postService: PostService, private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }

  addPost() {
    const post = { ...this.newPost, date: new Date(this.newPost.date) };
    post.date.setHours(post.date.getHours() + 7)
    if (this.editMode && this.currentPostId) {
      this.postService.updatePost(this.currentPostId, post).then(() => {
        this.resetForm();
        this._snackBar.open('Evento editado com sucesso','',{
          duration: 2000
        });
      });
    } else {
      this.postService.addPost(post).then(() => {
        this.resetForm();
        this._snackBar.open('Evento incluído com sucesso','',{
          duration: 2000
        });
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
      scheduleSantos: '',
      schedulePraiaGrande: '',
      scheduleSaoVicente: '',
      scheduleCubatao: '',
      scheduleReturn: ''
    };
    this.editMode = false;
    this.currentPostId = undefined;
  }
}
