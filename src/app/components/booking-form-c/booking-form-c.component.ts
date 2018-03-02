import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-booking-form-c',
  templateUrl: './booking-form-c.component.html',
  styleUrls: ['./booking-form-c.component.css']
})
export class BookingFormCComponent implements OnInit {

  bookingLength: any;
  
  @Input() product: string;

  constructor() { }

  ngOnInit() {
  }

 

  calculateBookingLength(startDate, endDate) {
    startDate = new Date(startDate);
    endDate = new Date(endDate)
    this.bookingLength = (endDate - startDate) / (24 * 3600 * 1000);
    console.log(startDate)
  }

}
