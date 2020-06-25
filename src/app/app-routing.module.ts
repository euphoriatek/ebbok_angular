import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UploadEbookComponent } from './upload-ebook/upload-ebook.component';
import { ImageTextEditorComponent } from './image-text-editor/image-text-editor.component';
import { UploadPoliciesComponent } from './upload-policies/upload-policies.component';
import { AdminOptionComponent } from './admin-option/admin-option.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { CompendiumComponent } from './compendium/compendium.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: 'login',  component: LoginComponent,},
{ path: 'upload-ebook',  component: UploadEbookComponent,},
{ path: 'image-editor',  component: ImageTextEditorComponent,},
{ path: 'home',  component: HomeComponent,},
{ path: 'upload-policies',  component: UploadPoliciesComponent,},
{ path: 'admin',  component: AdminOptionComponent,},
{ path: 'tree-view',  component: TreeViewComponent,},
{ path: 'compendium',  component: CompendiumComponent,},
{ path: 'add-user',  component: AddUserComponent,},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
