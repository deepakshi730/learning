import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePhonesComponent } from './mobile-phones.component';

describe('MobilePhonesComponent', () => {
  let component: MobilePhonesComponent;
  let fixture: ComponentFixture<MobilePhonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilePhonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobilePhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
