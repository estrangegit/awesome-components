import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostsResolver } from './resolvers/posts.resolver';
import { PostsService } from './services/posts.service';
import { SocialMediaRoutingModule } from './social-media-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        PostListComponent,
        PostListItemComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
        SocialMediaRoutingModule
    ],
    providers: [
        PostsService,
        PostsResolver
    ]
})
export class SocialMediaModule { }
