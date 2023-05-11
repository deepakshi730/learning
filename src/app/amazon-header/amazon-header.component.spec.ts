import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonHeaderComponent } from './amazon-header.component';

describe('AmazonHeaderComponent', () => {
  let component: AmazonHeaderComponent;
  let fixture: ComponentFixture<AmazonHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazonHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmazonHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
