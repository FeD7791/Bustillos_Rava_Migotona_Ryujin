import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerDesktopComponent } from './manager-desktop.component';

describe('ManagerDesktopComponent', () => {
  let component: ManagerDesktopComponent;
  let fixture: ComponentFixture<ManagerDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerDesktopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
