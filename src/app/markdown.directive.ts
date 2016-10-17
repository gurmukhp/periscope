import { Directive, Input, HostBinding } from '@angular/core';

import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';

@Directive({
  selector: '[markdown]'
})
export class MarkdownDirective {
  @HostBinding('innerHTML') innerHtml: string;

  private mit = new MarkdownIt({
    html: false,
    linkify: true,
    typographer: true,
    highlight: highlight
  });

  @Input() set markdown(md) {
    this.innerHtml = this.mit.render(md);
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
