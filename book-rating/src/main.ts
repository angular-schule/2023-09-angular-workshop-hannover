import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

console.log('Hello ngWorld! 🤩')


class Test {
  blubb: number;


  constructor(private zahl: number) {
    console.log('Hallo', this.zahl);

    // useDefineForClassFields
    this.blubb = this.zahl + 1
    console.log(this.blubb);
  }
}

const test = new Test(42)
