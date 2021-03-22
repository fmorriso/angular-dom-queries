import { Component, OnInit, VERSION as ngVersion } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  public get angularVersion(): string {
    return ngVersion.full;
  }

  ngOnInit(): void {
  }

}
