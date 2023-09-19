import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { DespesasPage } from './Despesas.page';

describe('DespesasPage', () => {
  let component: DespesasPage;
  let fixture: ComponentFixture<DespesasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DespesasPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DespesasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
