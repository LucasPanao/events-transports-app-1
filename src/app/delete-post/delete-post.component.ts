import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../IPosts';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrl: './delete-post.component.css',
})
export class DeletePostComponent implements OnInit {
  posts: Post[] = [];
  filteredPosts: Post[] = [];
  searchQuery: string = '';

  constructor(private postService: PostService, public dialog: MatDialog) {}

  ngOnInit() {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data;
      this.filteredPosts = data;
    });
  }

  openConfirmDialog(post: Post): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { postName: post.name },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.delete(post);
      }
    });
  }

  delete(post: Post) {
    post.id ? this.postService.deletePost(post?.id) : '';
  }

  filterPosts() {
    this.filteredPosts = this.posts.filter(post => 
      post.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
