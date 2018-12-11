import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from "./auth/auth.guard";
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: '', component: PostsComponent }
  // { path: "create", component: PostCreateComponent, canActivate: [AuthGuard] },
  // { path: "edit/:postId", component: PostCreateComponent, canActivate: [AuthGuard] },
  // { path: "auth", loadChildren: "./auth/auth.module#AuthModule"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  // ,
  // providers: [AuthGuard]
})
export class AppRoutingModule {}
