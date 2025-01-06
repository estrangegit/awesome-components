import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { SingleCandidateComponent } from './components/single-candidate/single-candidate.component';
import { ReactiveStateRoutingModule } from './reactive-state-routing.module';
import { CandidatesService } from './services/candidates.service';


@NgModule({
    declarations: [
        CandidateListComponent,
        SingleCandidateComponent
    ],
    imports: [
        CommonModule,
        ReactiveStateRoutingModule,
        SharedModule
    ],
    providers: [
        CandidatesService
    ]
})
export class ReactiveStateModule { }
