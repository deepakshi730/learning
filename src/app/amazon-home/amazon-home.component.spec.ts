import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonHomeComponent } from './amazon-home.component';

describe('AmazonHomeComponent', () => {
  let component: AmazonHomeComponent;
  let fixture: ComponentFixture<AmazonHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazonHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmazonHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
