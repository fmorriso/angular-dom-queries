import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
//
import { HelloComponent } from '../hello/hello.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  name = 'Angular';
  @ViewChild(HelloComponent, { static: false }) hello: HelloComponent;
  @ViewChild('pRef', { static: false }) pRef: ElementRef;
  @ViewChildren(HelloComponent) hellos: QueryList<any>;

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Hello ', this.hello.name);
    console.log(this.pRef.nativeElement.innerHTML);
    this.pRef.nativeElement.innerHTML = 'DOM updated successfully!!!';
    this.hellos.forEach(hello => console.log(hello.name));
  }

  ngOnInit() {
  }

}
