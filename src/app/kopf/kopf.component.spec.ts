import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KopfComponent } from './kopf.component';

describe('KopfComponent', () => {
  let component: KopfComponent;
  let fixture: ComponentFixture<KopfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KopfComponent]
    });
    fixture = TestBed.createComponent(KopfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
