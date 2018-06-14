import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-respuestamod',
  templateUrl: './respuestamod.component.html',
  styleUrls: ['./respuestamod.component.css']
})
export class RespuestamodComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public inicialnumber: string = "";
  public finalnumber: string = "";
  public numberproof: string = "";
  public firtscondition: number;
  public secondcondition: number;
  public result: any[] = [];
  public index: number;

  FizzBuzz() {
    this.result = [];
    this.index = 0;
    this.finalnumber = (parseFloat(this.inicialnumber) + 99).toString();

    for (var i = 0; i < 100; i++) {

      this.numberproof = (parseFloat(this.inicialnumber) + i).toString();
      this.firtscondition = (parseFloat(this.numberproof) % 3);
      this.secondcondition = (parseFloat(this.numberproof) % 5);

      if ((this.firtscondition === 0) && (this.secondcondition === 0)) {
        this.numberproof = "FIZZ-BUZZ";
      }
      else {
        if (this.firtscondition === 0) {
          this.numberproof = "FIZZ";
        }
        if (this.secondcondition === 0) {
          this.numberproof = "BUZZ";
        }
        else {
          this.numberproof = this.numberproof;

        }
      }
      this.result.push({ Result: this.numberproof });
    }
  }

  clear() {
    this.result = [];
    this.inicialnumber = "";
    this.finalnumber = "";
  }
}
