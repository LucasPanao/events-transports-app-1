import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../IPosts';
import { convertDateToString } from '../functions';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css'
})
export class EditPostComponent {
  posts: Post[] = [];
  filteredPosts: Post[] = [];
  searchQuery: string = '';
  selected = false;
  selectedPost: any;

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

  handlePost(post: Post) {
    this.selected = true;
    post.date = convertDateToString(post.date)
    this.selectedPost = post;
  }

}
