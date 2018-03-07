import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-booking-form-c',
  templateUrl: './booking-form-c.component.html',
  styleUrls: ['./booking-form-c.component.scss']
})
export class BookingFormCComponent implements OnInit {
  
  bookingLength: any;
  startDate: any;
  endDate: any 
  productId: string;
  bookingCost: any;
  today: any;
  showSelected: boolean
  @Output() submitForm = new EventEmitter<any>();
  
  @Input() feedbackEnabled: boolean;
  @Input() error: string; 
  @Input() processing: boolean;
  @Input() product: any;

 

  constructor() { }

  ngOnInit() {
    this.startDate = new Date().setHours(1,0,0,0)
    this.showSelected = false;
  }

 

  calculateBookingLengthAndCost(startDate, endDate) {
    startDate = new Date(startDate);
    endDate = new Date(endDate)
    this.bookingLength = (endDate - startDate) / (24 * 3600 * 1000);
    this.bookingCost = this.bookingLength * this.product.price
    console.log(startDate, endDate)

  }


  submitBookingForm(form) {
    this.error='';
    this.feedbackEnabled = true;
    this.showSelected = true;


    if (form.valid){
      // this.processing = false;
      const data = {
        startDate: this.startDate,
        endDate: this.endDate,
        productId: this.product._id
      }
      this.showSelected = true;
      this.submitForm.emit(data);
     }
  }

}
