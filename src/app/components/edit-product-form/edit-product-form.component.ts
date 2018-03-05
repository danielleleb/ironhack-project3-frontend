import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.scss']
})
export class EditProductFormComponent implements OnInit {

  @Input() product

  constructor() { }

  ngOnInit() {
  }

}
