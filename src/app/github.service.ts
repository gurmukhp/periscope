import { Injectable } from '@angular/core';

//import GitHub from 'github-api';

declare const GitHub;


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


@Injectable()
export class GithubService {
  private gh: any;

  constructor() {
    this.gh = new GitHub({token: 'c7847c0034fabe0c80add2db6438ad5241b59b85'});
  }

  getIssues(): Promise<any> {
    return this.gh.getIssues('angular', 'angular').listIssues().then(resp => resp.data);
  }

  

}
