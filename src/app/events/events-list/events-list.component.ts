import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  eventData: any = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2016',
    time: '10:00 am',
    price: 599.99,
    imageUrl: 'assets/images/angularconnect-shield.jpg',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  }

  constructor() { }

  ngOnInit() {
  }

  handleClick(data) {
    console.log(data);
  }

}
