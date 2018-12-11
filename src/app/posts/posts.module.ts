import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { AngularMaterialModule } from '../angular.material.module';
import { PostsService } from './posts.service';

@NgModule({
  imports: [CommonModule, AngularMaterialModule],
  declarations: [PostsComponent],
  providers: [PostsService]
})
export class PostsModule {}
