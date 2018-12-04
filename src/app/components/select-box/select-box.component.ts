import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss']
})
export class SelectBoxComponent implements OnInit {

  constructor() { }

  showDropdown = false;
  selectedValue: any;
  otherValus: any;

  @Input() set selVal(val: any) {
    this.selectedValue = val;
  }
  @Input() set othVal(val: any) {
    this.otherValues = val;
  }
  @Input() otherValues;

  @Input() set width(val: any) {
    this.dropDownMain.nativeElement.style.setProperty('width', val + "px");
  }
  @Input() set height(val: any) {
    this.dropDownMain.nativeElement.style.setProperty('height', val + "px");
    this.dropDownMain.nativeElement.style.setProperty('line-height', val + "px");
  }

  @ViewChild('dropdownMain') dropDownMain: ElementRef;

  ngOnInit() { }

  toggleMenu() {
    this.showDropdown = !this.showDropdown;
  }
  get dropdown() {
    return this.showDropdown;
  }

}
