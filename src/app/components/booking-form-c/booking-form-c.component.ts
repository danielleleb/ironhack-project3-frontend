import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-booking-form-c',
  templateUrl: './booking-form-c.component.html',
  styleUrls: ['./booking-form-c.component.scss']
})
export class BookingFormCComponent implements OnInit {

  bookingLength: any;
  
  @Input() product: string;

  constructor() { }

  ngOnInit() {
  }

  calculateBookingLength(startDate, endDate) {
    this.bookingLength = endDate - startDate;
    return this.bookingLength
  }

}
