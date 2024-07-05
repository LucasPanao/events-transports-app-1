import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../IPosts';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css'
})
export class EditPostComponent {
  posts: Post[] = [];
  filteredPosts: Post[] = [];
  searchQuery: string = '';

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data;
      this.filteredPosts = data;
    });
  }

  filterPosts() {
    this.filteredPosts = this.posts.filter(post => 
      post.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

}
