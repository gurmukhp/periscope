import { Injectable } from '@angular/core';

import MarkdownIt from 'markdown-it';

@Injectable()
export class MarkdownService {
  private mit = new MarkdownIt;

  public toHtml(markdown: string): string {
    return this.mit.render(markdown);
  }

}
