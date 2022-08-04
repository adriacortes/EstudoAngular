import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundaComponenteComponent } from './segunda-componente.component';

describe('SegundaComponenteComponent', () => {
  let component: SegundaComponenteComponent;
  let fixture: ComponentFixture<SegundaComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundaComponenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundaComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
