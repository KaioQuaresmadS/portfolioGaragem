import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivicComponent } from './civic.component';

describe('CivicComponent', () => {
  let component: CivicComponent;
  let fixture: ComponentFixture<CivicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CivicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CivicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
