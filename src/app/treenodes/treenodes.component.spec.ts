import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreenodesComponent } from './treenodes.component';

describe('TreenodesComponent', () => {
  let component: TreenodesComponent;
  let fixture: ComponentFixture<TreenodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreenodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreenodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
