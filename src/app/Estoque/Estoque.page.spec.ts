import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { EstoquePage } from './Estoque.page';

describe('EstoquePage', () => {
  let component: EstoquePage;
  let fixture: ComponentFixture<EstoquePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstoquePage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(EstoquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
