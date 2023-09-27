import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Subject, ReplaySubject, timer, Subscription, takeWhile, takeUntil, take, tap, scan } from 'rxjs';
import { HistoryComponent } from '../../shared/history/history.component';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop'
import { AsyncPipe } from '@angular/common';

@Component({
  templateUrl: './unsubscribe.component.html',
  standalone: true,
  imports: [HistoryComponent, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnsubscribeComponent {

  interval$$ = toSignal(timer(0, 1000).pipe(
    scan((a,b) => a + b, -99),
    tap(e => console.log(e))
  ));
}
