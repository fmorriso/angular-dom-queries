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
    this.changepRef();
    this.buildMessage();

    // must be last if injecting ChangeDetectorRef
    this.cd.detectChanges();
  }

  private changepRef(): void {
    this.pRef.nativeElement.innerHTML = 'DOM updated successfully!!!';
  }

  private buildMessage(): void {
    const arr: string[] = [];
    let lth = 0;
    this.hellos.forEach(hello => lth = arr.push(hello.name.trim()));
    console.log('arr after forEach:' + arr);
    // const lth: number = arr.length;
    console.log('arr length: ' + arr.length);
    const localMessage = 'Hellos: ' + arr.join(', ');
    console.log('localMessage after join: ' + localMessage);
    this.message = localMessage;
  }

  ngOnInit() {
  }

}
