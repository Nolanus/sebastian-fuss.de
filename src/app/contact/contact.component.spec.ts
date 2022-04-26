import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [FormsModule, HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should throw error on invalid form data', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(component.sending).toBeFalse();

    component.sendMessage();
    fixture.detectChanges();

    expect(compiled.querySelectorAll('.invalid-feedback').length).toEqual(3);
    expect(component.sending).toBeFalse();

  });

  it('should send valid form data to backend', () => {
    const httpMock = TestBed.inject(HttpTestingController);

    component.input = {
      name: 'John Doe',
      email: 'john@example.com',
      text: 'Test Message'
    };
    fixture.detectChanges();

    expect(component.sending).toBeFalse();
    component.sendMessage();
    fixture.detectChanges();

    expect(component.sending).toBeTrue();

    const mockRequest = httpMock.expectOne(
      (req) => {
        return req.url === 'http://mail.sebastian-fuss.de/hi' && req.body === component.input
      }
    );
    mockRequest.flush({});
    fixture.detectChanges();

    expect(component.sending).toBeFalse();
    expect(component.input.text).toEqual('');
  });
});
