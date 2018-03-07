import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment'



@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  apiUrl = environment.apiUrl;

  @Input() product;
  @Input() showProfileLink;
  @Input() businessId
  @Input() user
  location: any;

  constructor(private router: Router) { 
  }

  ngOnInit() {
    // this.showProfileLink = false;

  }

  demo(icon) {
    console.log(icon)
  }

}
