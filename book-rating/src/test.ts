export class Test {
  blubb: number;


  constructor(public zahl: number) {
    console.log('Hallo', this.zahl);

    // useDefineForClassFields
    this.blubb = this.zahl + 1
    console.log(this.blubb);
  }
}
