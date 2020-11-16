import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaginaAccionesPage } from './pagina-acciones.page';

describe('PaginaAccionesPage', () => {
  let component: PaginaAccionesPage;
  let fixture: ComponentFixture<PaginaAccionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaAccionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaAccionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
