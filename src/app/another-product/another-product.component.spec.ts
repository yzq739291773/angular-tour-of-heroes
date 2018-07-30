import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherProductComponent } from './another-product.component';

describe('AnotherProductComponent', () => {
  let component: AnotherProductComponent;
  let fixture: ComponentFixture<AnotherProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
