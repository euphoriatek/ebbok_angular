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
import { CompendiumComponent } from './compendium/compendium.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { AdminOptionComponent } from './admin-option/admin-option.component';
import { UploadPoliciesComponent } from './upload-policies/upload-policies.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [
  AppComponent,
  HomeComponent,
  LoginComponent,
  HeaderComponent,
  FooterComponent,
  UploadEbookComponent,
  ImageTextEditorComponent,
  CompendiumComponent,
  TreeViewComponent,
  AdminOptionComponent,
  UploadPoliciesComponent
  ],
  imports: [
  MatTableModule,
  MatListModule,
  CKEditorModule,
  ChartsModule,
  BrowserModule,
  FormsModule,
  ReactiveFormsModule,
  AppRoutingModule,
  NgbModule,
  NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
