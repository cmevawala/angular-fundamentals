import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EventService } from '../data-services/event.service';

@Injectable()
export class EventDetailRouteActivatorService implements CanActivate {

  constructor(private _eventService: EventService, private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
    const isExists = !!this._eventService.getEventById(+route.params['id']);
    
    if (!isExists) {
      this._router.navigate(['/404'])
    } 

    return isExists;
  }
}
