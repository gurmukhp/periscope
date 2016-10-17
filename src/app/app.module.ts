import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MaterialModule} from '@angular/material';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CounterComponent } from './counter/counter.component';
import { TriageComponentComponent} from './triage-component/triage-component.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { MultiCompleteComponent } from './multi-complete/multi-complete.component';
import { MarkdownDirective } from './markdown.directive';
import {GithubService} from "./github.service";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CounterComponent,
    TriageComponentComponent,
    MultiCompleteComponent,
    MarkdownDirective,
  ],
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
