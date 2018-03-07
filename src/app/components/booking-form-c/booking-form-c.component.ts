import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-booking-form-c',
  templateUrl: './booking-form-c.component.html',
  styleUrls: ['./booking-form-c.component.scss']
})
export class BookingFormCComponent implements OnInit {
  
  bookingLength: any;
  startDate: number;
  endDate: number;
  productId: string;
  bookingCost: any;
  @Output() submitForm = new EventEmitter<any>();
  
  @Input() feedbackEnabled: boolean;
  @Input() error: string; 
  @Input() processing: boolean;
  @Input() product: any;

 

  constructor() { }

  ngOnInit() {
  }

 

  calculateBookingLengthAndCost(startDate, endDate) {
    startDate = new Date(startDate);
    endDate = new Date(endDate)
    this.bookingLength = (endDate - startDate) / (24 * 3600 * 1000);
    this.bookingCost = this.bookingLength * this.product.price

  }


  submitBookingForm(form) {
    this.error='';
    this.feedbackEnabled = true;

    if (form.valid){
      // this.processing = false;
      const data = {
        startDate: this.startDate,
        endDate: this.endDate,
        productId: this.product._id
      }
      this.submitForm.emit(data);
     }
  }

}
