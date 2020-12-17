import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTypesNavigationComponent } from './item-types-navigation.component';

describe('ItemTypesNavigationComponent', () => {
  let component: ItemTypesNavigationComponent;
  let fixture: ComponentFixture<ItemTypesNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTypesNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTypesNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
