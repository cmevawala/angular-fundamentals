import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventService } from '../../services/data-services/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  event: any;

  constructor(private _eventSevice: EventService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // Learn more about this API
    this.event = this._eventSevice.getEventById(+this._activatedRoute.snapshot.params["id"]);
  }
}
