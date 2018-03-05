import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-booking-form-c',
  templateUrl: './booking-form-c.component.html',
  styleUrls: ['./booking-form-c.component.scss']
})
export class BookingFormCComponent implements OnInit {
  
  bookingLength: any;
  @Output() submitForm = new EventEmitter<any>();
  
  @Input() feedbackEnabled: boolean;
  @Input() error: string; 
  @Input() processing: boolean;
  @Input() product: string;

  startDate: number;
  endDate: number;

  constructor() { }

  ngOnInit() {
  }

 

  calculateBookingLength(startDate, endDate) {
    startDate = new Date(startDate);
    endDate = new Date(endDate)
    this.bookingLength = (endDate - startDate) / (24 * 3600 * 1000);
    console.log(startDate)
  }

  submitBookingForm(form) {
    this.error='';
    this.feedbackEnabled = true;

    if (form.valid){
      // this.processing = false;
      const data = {
        startDate: this.startDate,
        endDate: this.endDate
      }
      this.submitForm.emit(data);
     }
  }

}
