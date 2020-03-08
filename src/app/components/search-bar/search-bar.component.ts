import { Component, OnInit, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Festival } from 'src/app/models/festival';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input() public search = "";
  @Input() public festivals: Festival[];
  @Input() public clearOnBlur = false;
  @Output() public searchChange = new EventEmitter<string>();
  @Output() public blur = new EventEmitter<string>();

  @ViewChild("input", {static: false}) public input: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onSearchChange(search: string) {
    this.search = search;
    this.searchChange.emit(search);
  }

  onKeyDown(event: { code: string; preventDefault: () => void; }) {
    if (event.code == "Escape") {
      this.search = "";
      this.blur.emit("blur");
    }
  }

  onBlur() {
    this.blur.emit("blur");
    if (this.search != "") return;
    if (!this.clearOnBlur) return;
    this.search = "";
    this.searchChange.emit(this.search);
  }

  focus() {    
    this.input.nativeElement.focus();
  }

}
