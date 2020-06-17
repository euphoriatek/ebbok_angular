import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UploadEbookComponent } from './upload-ebook/upload-ebook.component';
import { ImageTextEditorComponent } from './image-text-editor/image-text-editor.component';


const routes: Routes = [
{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: 'login',  component: LoginComponent,},
{ path: 'upload-ebook',  component: UploadEbookComponent,},
{ path: 'image-editor',  component: ImageTextEditorComponent,},
{ path: 'home',  component: HomeComponent,},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
