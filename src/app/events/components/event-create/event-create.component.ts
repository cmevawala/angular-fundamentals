import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  onCancel() {
    this._router.navigate(['/events']); // Why Array?
  }

}
