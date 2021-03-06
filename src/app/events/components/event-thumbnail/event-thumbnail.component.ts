import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input() event: any;
  @Output() click = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    this.click.emit(this.event.name);
  }

  logFoo() {
    console.log("Foo");
  }
}
