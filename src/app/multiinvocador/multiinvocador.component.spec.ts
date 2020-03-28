import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiinvocadorComponent } from './multiinvocador.component';

describe('MultiinvocadorComponent', () => {
  let component: MultiinvocadorComponent;
  let fixture: ComponentFixture<MultiinvocadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiinvocadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiinvocadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
