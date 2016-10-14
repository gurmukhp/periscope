/* tslint:disable:no-unused-variable */

import {By} from '@angular/platform-browser';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { MultiCompleteComponent } from './multi-complete.component';
import {AppModule} from '../app.module';
import {NgbTypeaheadModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';

describe('Component: MultiComplete', () => {
  let component: ComponentFixture<MultiCompleteComponent>;
  let inputEl: DebugElement;

  beforeEach( async(() => {
    TestBed.configureTestingModule({imports: [AppModule]});
    // Mock out NgbModule
    TestBed.overrideModule(NgbModule, {set: {
      declarations: [],
      imports: []
    }});
    TestBed.compileComponents();
  }));

  it('should create an instance', () => {
    init();
    expect(component).toBeTruthy();
  });

  it('should add the selected item when the autosuggest selects an item', () => {
    init();
    const event = triggerAutoSuggestSelectItem('new item');
    expect(component.componentInstance.selected).toEqual([event.item]);
    expect(event.preventDefault).toHaveBeenCalled();
  });

  it('should fire the selectItem event when the autosuggest selects an item', () => {
    init();
    let selectedItems: any;
    component.componentInstance.selectItem.subscribe( (_items) => selectedItems = _items);
    triggerAutoSuggestSelectItem('item a');
    expect(selectedItems).toEqual(['item a']);
    triggerAutoSuggestSelectItem('item b');
    expect(selectedItems).toEqual(['item a', 'item b']);
  });

  it('should clear the input box when an item is selected', () => {
    init();
    inputEl.nativeElement.value = 'new';
    component.detectChanges();
    expect(inputEl.nativeElement.value).toBe('');
  });

  it('should show the selected items', () => {
    init();
    component.componentInstance.selected = ['item a', 'item b'];
    component.detectChanges();
    const btns = component.debugElement.queryAll(By.css('.tag:not(.btn)'));
    expect(btns.length).toBe(2);
    expect(btns[0].nativeElement.textContent).toContain('item a');
    expect(btns[1].nativeElement.textContent).toContain('item b');
  });

  it('should remove an item when it is clicked', () => {
    init();
    component.componentInstance.selected = ['item a'];
    component.detectChanges();
    const btns = component.debugElement.queryAll(By.css('.btn'));
    btns[0].triggerEventHandler('click', {});
    component.detectChanges();
    expect(component.componentInstance.selected).toEqual([]);
  });

  it('should fire the selectItem event when an item is removed', () => {
    init();
    let selectedItems: any;
    component.componentInstance.selectItem.subscribe( (_items) => selectedItems = _items);
    component.componentInstance.selected = ['item a', 'item b'];
    component.detectChanges();

    const btns = component.debugElement.queryAll(By.css('.btn'));
    btns[0].triggerEventHandler('click', {});
    expect(selectedItems).toEqual(['item b']);
  });

  function init() {
    component = TestBed.createComponent(MultiCompleteComponent);
    inputEl = component.debugElement.query(By.css('input'));
  }

  function triggerAutoSuggestSelectItem(item: string) {
    const event = {
        item: item,
        preventDefault: jasmine.createSpy('preventDefault')
    };
    inputEl.triggerEventHandler('selectItem', event);
    return event;
  }
});

