import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEditDialogComponent } from './student-edit-dialog.component';

describe('StudentEditDialogComponent', () => {
  let component: StudentEditDialogComponent;
  let fixture: ComponentFixture<StudentEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
