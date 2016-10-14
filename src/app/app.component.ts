import { Component } from '@angular/core';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup} from "@angular/forms";

const COMPONENTS: string[] = [
  'animations',
  'benchpress',
  'build & ci',
  'core & compiler',
  'docs',
  'forms',
  'http',
  'i18n',
  'metadata-extractor',
  'packaging',
  'performance',
  'router',
  'security',
  'testing',
  'upgrade',
  'web-worker',
  'zone',
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  activeCmps: {[name: string]: boolean} = {};
  cmps = COMPONENTS;
  form: FormGroup;

  closeResult: string;

  details: {
    customReply?: string;
    savedReply?: string;
    needRepro?: boolean;
    canBeClosed?: boolean;
    close?: boolean;
  } = {};


  constructor(private modalService: NgbModal, private fb: FormBuilder) {
    for (const cmp of this.cmps) {
      this.activeCmps[cmp] = false;
    }
  }

  open(content) {
    this.buildForm();
    this.modalService.open(content).result.then((result) => {
      console.log('close');
      this.closeResult = `Closed with: ${result}`;
      console.log(this.form.value);
    }, _ => null);
  }

  private buildForm() {
    this.form = this.fb.group({
      customReply: [this.details.customReply],
      savedReply: [this.details.savedReply],
      needRepro: [this.details.needRepro],
      canBeClosed: [this.details.canBeClosed],
      close: [this.details.close],
    });
  }
}
