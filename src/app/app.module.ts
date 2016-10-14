import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MaterialModule} from '@angular/material';
import { HttpModule } from '@angular/http';

import {MarkdownService} from './test.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CounterComponent } from './counter/counter.component';
import { TriageComponentComponent, InnerMd } from './triage-component/triage-component.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { MultiCompleteComponent } from './multi-complete/multi-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CounterComponent,
    TriageComponentComponent,
    InnerMd,
    MultiCompleteComponent,
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
    MarkdownService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
