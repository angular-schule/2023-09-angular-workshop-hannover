import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(() => {

    // const bookRatingMock  = {
    //   rateUp: (book: Book) => book
    // };

    TestBed.configureTestingModule({
      imports: [DashboardComponent], // Vorsicht: Integrations-Test by default
      // providers: [{
      //   provide: BookRatingService,
      //   useValue: bookRatingMock
      // }]
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('doRateUp() should call the BookRatingService', () => {

    const rs = TestBed.inject(BookRatingService);
    spyOn(rs, 'rateUp').and.callThrough();

    const book = { } as Book;
    component.doRateUp(book);

    expect(rs.rateUp).toHaveBeenCalledOnceWith(book);
  });
});
