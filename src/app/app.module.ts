import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage'
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { PhotosComponent } from './menu/photos/photos.component';
import { FeedbacksComponent } from './menu/feedbacks/feedbacks.component';
import { AboutComponent } from './menu/about/about.component';
import { ContactComponent } from './menu/contact/contact.component';
import { FaqComponent } from './menu/faq/faq.component';
import { environment } from '../environment/environment';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';
import { ExcursionDetailsModalComponent } from './excursion-details-modal/excursion-details-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AdminComponent } from './admin/admin.component';
import { DeletePostComponent } from './delete-post/delete-post.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { BannerComponent } from './banner/banner.component';
import { RefundPolicyComponent } from './menu/refund-policy/refund-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    PhotosComponent,
    FeedbacksComponent,
    AboutComponent,
    ContactComponent,
    FaqComponent,
    PostComponent,
    ExcursionDetailsModalComponent,
    AdminComponent,
    DeletePostComponent,
    ConfirmDialogComponent,
    EditPostComponent,
    BannerComponent,
    RefundPolicyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatTableModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
