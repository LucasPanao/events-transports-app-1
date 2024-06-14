import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';

interface Post {
  photo: string;
  name: string;
  date: any;
  value: number;
  info: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private firestore: AngularFirestore) {}

  getPosts(): Observable<Post[]> {
    return this.firestore
      .collection<Post>('/posts')
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data() as Post;
            const id = a.payload.doc.id;
            if (data.date && data.date.toDate) {
              data.date = data.date.toDate();
            }
            return { id, ...data };
          })
        )
      );
  }

  getPostsByMonth(month: number): Observable<Post[]> {
    return this.getPosts().pipe(
      map(posts => posts.filter(post => post.date.getMonth() + 1 === month))
    );
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
