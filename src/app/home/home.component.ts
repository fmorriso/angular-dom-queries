import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, QueryList, ViewChildren, ChangeDetectorRef } from '@angular/core';
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
  message = '';

  constructor(private cd: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    /* without using ChangeDetectorRef:
        Promise.resolve()
          .then(() => this.buildMessage())
          .then(() => this.changeDom()
          );

     */
    /* using ChangeDetectorRef */
    this.changeDom();
    this.buildMessage();

    // must be last
    this.cd.detectChanges();

    // console.log('Hello ' + this.hello.name);
    // console.log(this.pRef.nativeElement.innerHTML);
    /*
    this.pRef.nativeElement.innerHTML = 'DOM updated successfully!!!';
    this.hellos.forEach(hello => console.log(hello.name));
    let localMessage = '';
    this.hellos.forEach(hello => localMessage += hello.name + ', ');
    this.message = localMessage;
    console.log(this.message);
    */
  }

  private changeDom(): void {
    this.pRef.nativeElement.innerHTML = 'DOM updated successfully!!!';
  }

  private buildMessage(): void {
    const arr: string[] = [];
    this.hellos.forEach(hello => arr.push(hello.name.trim()));
    console.log('arry:' + arr);
    let localMessage = ''; // arr.join(', ');
    for (let index = 0; index < arr.length; index++) {
      localMessage += arr[index];
      if (index > 0 && index < arr.length - 1) {
        localMessage += ', ';
      }
    }
    localMessage = 'Hellos: ' + localMessage;
    console.log('localMessage after join: ' + localMessage);
    localMessage.replace(':,', ':');
    this.message = localMessage;
  }

  ngOnInit() {
  }

}
