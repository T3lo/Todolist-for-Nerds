import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedTaskComponent } from './advanced-task.component';

describe('AdvancedTaskComponent', () => {
  let component: AdvancedTaskComponent;
  let fixture: ComponentFixture<AdvancedTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
