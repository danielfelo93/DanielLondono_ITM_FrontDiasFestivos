import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivoVerificarComponent } from './festivo-verificar.component';

describe('FestivoVerificarComponent', () => {
  let component: FestivoVerificarComponent;
  let fixture: ComponentFixture<FestivoVerificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FestivoVerificarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FestivoVerificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
