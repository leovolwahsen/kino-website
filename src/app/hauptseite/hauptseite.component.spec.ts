import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HauptseiteComponent } from './hauptseite.component';

describe('HauptseiteComponent', () => {
  let component: HauptseiteComponent;
  let fixture: ComponentFixture<HauptseiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HauptseiteComponent]
    })
    .compileComponents();
  });

    beforeEach(() => {
    fixture = TestBed.createComponent(HauptseiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});