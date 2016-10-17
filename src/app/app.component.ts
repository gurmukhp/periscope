import { Component } from '@angular/core';
import {GithubService} from "./github.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  issues: Promise<any>;

  constructor(gh: GithubService) {
    this.issues = gh.getIssues();
  }

}
