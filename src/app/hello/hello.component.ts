import {Component, Input, OnInit} from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  @Input() name: string;
  constructor() { }

  ngOnInit() {
  }

}
