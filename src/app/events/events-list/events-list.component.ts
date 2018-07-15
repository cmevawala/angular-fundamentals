import { Component, OnInit } from '@angular/core';

import { EventService } from '../services/event.service';
import { ToastrService } from '../../shared/services/toastr/toastr.service';
@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: any[];
  constructor(private eventService: EventService, private toastr: ToastrService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  onThumbnailClick(event) {
    this.toastr.success(event.name, event.location && event.location.country);
  }
}