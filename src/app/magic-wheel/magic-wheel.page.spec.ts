import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MagicWheelPage } from './magic-wheel.page';

describe('MagicWheelPage', () => {
  let component: MagicWheelPage;
  let fixture: ComponentFixture<MagicWheelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicWheelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MagicWheelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
