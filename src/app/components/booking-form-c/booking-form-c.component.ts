import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-booking-form-c',
  templateUrl: './booking-form-c.component.html',
  styleUrls: ['./booking-form-c.component.css']
})
export class BookingFormCComponent implements OnInit {

  @Input() product: string;

  constructor() { }

  ngOnInit() {
  }

}
