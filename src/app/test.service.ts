import { Injectable } from '@angular/core';

import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';

@Injectable()
export class MarkdownService {
  private mit = new MarkdownIt({
    html: false,
    linkify: true,
    typographer: true,
    highlight: highlight
  });

  public toHtml(markdown: string): string {
    return this.mit.render(markdown);
  }
}

function highlight(code: string, lang: string): string {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, code).value;
      } catch (e) {
      }
    }

    // use external default escaping
    return '';
}
