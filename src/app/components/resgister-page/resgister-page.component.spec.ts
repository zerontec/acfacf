import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgisterPageComponent } from './resgister-page.component';

describe('ResgisterPageComponent', () => {
  let component: ResgisterPageComponent;
  let fixture: ComponentFixture<ResgisterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResgisterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResgisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
