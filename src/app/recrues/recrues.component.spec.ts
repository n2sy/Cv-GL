import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruesComponent } from './recrues.component';

describe('RecruesComponent', () => {
  let component: RecruesComponent;
  let fixture: ComponentFixture<RecruesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
