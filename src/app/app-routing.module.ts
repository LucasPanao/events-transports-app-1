import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { PhotosComponent } from './photos/photos.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'feedbacks', component: FeedbacksComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'faq', component: FaqComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
