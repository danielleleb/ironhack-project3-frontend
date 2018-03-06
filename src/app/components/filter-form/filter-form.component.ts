import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss']
})
export class FilterFormComponent implements OnInit {

  showSelected: boolean = false

  constructor() { }

  ngOnInit() {
  }

  toggleForm() {
    this.showSelected = !this.showSelected;
  }

  filterProducts(){
   filterSelection('all');
  
   function filterSelection (c) {
     const x = document.getElementsByClassName('product-card');
     if (c == 'all') {
       c = '';
     }
     for (let i = 0; i < x.length; i++) {
       removeClass(x[i], 'show');
       if (x[i].className.indexOf(c) > -1) addClass(x[i], 'show');
     }
   }
   
   function addClass (element, name) {
     const arr1 = element.className.split(' ');
     const arr2 = name.split(' ');
     for (let i = 0; i < arr2.length; i++) {
       if (arr1.indexOf(arr2[i]) == -1) { element.className += ' ' + arr2[i]; }
     }
   }
   
   function removeClass (element, name) {
     const arr1 = element.className.split(' ');
     const arr2 = name.split(' ');
     for (let i = 0; i < arr2.length; i++) {
       while (arr1.indexOf(arr2[i]) > -1) {
         arr1.splice(arr1.indexOf(arr2[i]), 1);
       }
     }
     element.className = arr1.join(' ');
   }
  }

}
