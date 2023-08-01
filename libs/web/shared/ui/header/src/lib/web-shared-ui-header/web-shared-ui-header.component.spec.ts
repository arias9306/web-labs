import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebSharedUiHeaderComponent } from './web-shared-ui-header.component';

describe('WebSharedUiHeaderComponent', () => {
  let component: WebSharedUiHeaderComponent;
  let fixture: ComponentFixture<WebSharedUiHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebSharedUiHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebSharedUiHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
