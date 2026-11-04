import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
  
    // vérification des principaux éléments de mise en page 
    expect(compiled.querySelector('app-header')).toBeTruthy();
    expect(compiled.querySelector('main.content')).toBeTruthy();
    expect(compiled.querySelector('app-header')).toBeTruthy();
    expect(compiled.querySelector('app-header')).toBeTruthy();
  
  });
  
});
