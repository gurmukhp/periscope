import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MaterialModule} from '@angular/material';
import { HttpModule } from '@angular/http';

import {MarkdownService} from './test.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CounterComponent } from './counter/counter.component';
import { TriageComponentComponent, InnerMd } from './triage-component/triage-component.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CounterComponent
    TriageComponentComponent,
    InnerMd,
  ],
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
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
