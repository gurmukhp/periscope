import {Component, Input, EventEmitter, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {NgbTypeaheadSelectItemEvent} from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'multi-complete',
  templateUrl: './multi-complete.component.html',
  styleUrls: ['./multi-complete.component.scss']
})
export class MultiCompleteComponent {
  @Input()
  items: string[] = [];

  @Output()
  selectItem = new EventEmitter<string[]>();

  model: any = '';
  selected: string[] = [];

  addSelected(event: NgbTypeaheadSelectItemEvent) {
    event.preventDefault();
    this.selected.push(event.item);
    this.model = '';
    this.selectItem.next(this.selected);
  }

  removeSelected(itemIdx: number) {
    this.selected.splice(itemIdx, 1);
    this.selectItem.next(this.selected);
  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => this.items.filter(v => new RegExp(term, 'gi').test(v)).slice(0, 10));
}
