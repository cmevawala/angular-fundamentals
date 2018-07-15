import { TestBed, inject } from '@angular/core/testing';

import { EventDetailRouteActivatorService } from './event-detail-route-activator.service';

describe('EventDetailRouteActivatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventDetailRouteActivatorService]
    });
  });

  it('should be created', inject([EventDetailRouteActivatorService], (service: EventDetailRouteActivatorService) => {
    expect(service).toBeTruthy();
  }));
});
