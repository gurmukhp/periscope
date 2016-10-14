import { Component } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


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

  closeResult: string;

  constructor(private modalService: NgbModal) {
    for (const cmp of this.cmps) {
      this.activeCmps[cmp] = false;
    }
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      console.log('close');
      this.closeResult = `Closed with: ${result}`;
    }, _ => null);
  }


}
