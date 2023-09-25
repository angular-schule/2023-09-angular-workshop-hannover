import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: 'HALLO!'
})
export class DummyDashboardComponent {
}

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [AppComponent]
  })
  .overrideComponent(AppComponent, {
    // set: { imports: [], schemas: [NO_ERRORS_SCHEMA] } // Shallow Component Test

    // 100% Unit Test
    set: { imports: [
      RouterTestingModule,
      DummyDashboardComponent
    ]}
  }));

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  it(`should have the 'Book Rating ⭐️' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Book Rating ⭐️');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Book Rating');
  });
});
