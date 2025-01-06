import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentsComponent } from './components/comments/comments.component';
import { HighlightDirective } from './directives/highlight.directive';
import { MaterialModule } from './material.module';
import { ShortenPipe } from './pipes/shorten.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';

@NgModule({
    declarations: [
        CommentsComponent,
        ShortenPipe,
        TimeAgoPipe,
        HighlightDirective
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    exports: [
        CommentsComponent,
        MaterialModule,
        ReactiveFormsModule,
        ShortenPipe,
        TimeAgoPipe,
        HighlightDirective
    ]
})
export class SharedModule { }
