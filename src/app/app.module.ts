import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PostsModule } from './posts/posts.module';
import { AppRoutingModule } from './app.routing.module';
import { AngularMaterialModule } from './angular.material.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './reducer/reducer';
import { PostsEffects } from './effects/posts.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PostsModule,
    AppRoutingModule,
    AngularMaterialModule,
    StoreModule.forRoot({ reducer }),
    EffectsModule.forRoot([PostsEffects]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
