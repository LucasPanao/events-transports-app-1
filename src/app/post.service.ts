import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

interface Post {
  photo: string;
  name: string;
  date: any;
  value: number;
  info: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private firestore: AngularFirestore) { }

  getPosts(): Observable<Post[]> {
    return this.firestore.collection<Post>('/posts').valueChanges();
  }

  addPost(post: Post) {
    return this.firestore.collection('/posts').add(post);
  }

  updatePost(id: string, post: Post) {
    return this.firestore.doc(`/posts/${id}`).update(post);
  }

  deletePost(id: string) {
    return this.firestore.doc(`/posts/${id}`).delete();
  }
}
