import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { UploadEbookComponent } from './upload-ebook/upload-ebook.component';
import { ImageTextEditorComponent } from './image-text-editor/image-text-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [
  AppComponent,
  HomeComponent,
  LoginComponent,
  HeaderComponent,
  FooterComponent,
  UploadEbookComponent,
  ImageTextEditorComponent
  ],
  imports: [
  CKEditorModule,
  ChartsModule,
  BrowserModule,
  FormsModule,
  ReactiveFormsModule,
  AppRoutingModule,
  NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
