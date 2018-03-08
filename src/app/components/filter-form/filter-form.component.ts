import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss']
})
export class FilterFormComponent implements OnInit {

  showSelected: boolean = false;
  @Output() filterChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  toggleForm() {
    this.showSelected = !this.showSelected;
  }

  handleChange() {

    const inputOne: any = document.getElementById('bike-check');
    const inputTwo: any = document.getElementById('skate-check');
    const inputThree: any = document.getElementById('surf-check');

    const data = {
      bike: inputOne.checked,
      skate: inputTwo.checked,
      surf: inputThree.checked
    }

    this.filterChange.emit(data)
  }

}
