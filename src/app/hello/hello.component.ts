import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('111111111111111 HelloComponent');
  }

  ngOnDestroy() {
    console.log('2222222222222222 HelloComponent');
  }
}
