import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NgxCookiebotService } from '@halloverden/ngx-cookiebot';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideRouter([]),
        { provide: NgxCookiebotService, useValue: { cookiebot: { renew: () => { } } } }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Sebastian Fuss');
  });
});
