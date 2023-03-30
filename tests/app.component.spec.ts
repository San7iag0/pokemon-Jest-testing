import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../src/app/app.component';

describe('AppComponent', () => {

  beforeEach(async () => {

    let appComponent: AppComponent;

    await TestBed.configureTestingModule({
      providers: [AppComponent],
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    appComponent = TestBed.inject(AppComponent);

  });


  test('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  test(`should have as title 'angular-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    expect(component.title).toEqual('angular-testing');
  });

  test('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const h1 = compiled.querySelector('h1'); // look for the h1
    expect( h1?.textContent ).toContain( component.title );
  });

  test('should test if changes on html', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // detect changes 
    const compiled = fixture.nativeElement as HTMLElement;
    expect( compiled ).toMatchSnapshot();

  })

  it('adds  variables', () => {
    const fixture = TestBed.inject(AppComponent);
    jest.spyOn(fixture, 'sumar')
    expect(fixture.sumar).toBeCalled
  })
});
