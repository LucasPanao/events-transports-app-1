import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { PhotosComponent } from './menu/photos/photos.component';
import { FeedbacksComponent } from './menu/feedbacks/feedbacks.component';
import { AboutComponent } from './menu/about/about.component';
import { ContactComponent } from './menu/contact/contact.component';
import { FaqComponent } from './menu/faq/faq.component';
import { PostComponent } from './post/post.component';
import { AdminComponent } from './admin/admin.component';
import { DeletePostComponent } from './delete-post/delete-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';

const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'feedbacks', component: FeedbacksComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'posts', component: PostComponent },
  { path: 'delete-posts', component: DeletePostComponent },
  { path: 'edit-posts', component: EditPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
