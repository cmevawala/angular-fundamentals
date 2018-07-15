import { Routes } from "@angular/router";

import { EventsListComponent } from "./events/events-list/events-list.component";
import { EventDetailComponent } from "./events/event-detail/event-detail.component";
import { EventCreateComponent } from "./events/event-create/event-create.component";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";
import { EventDetailRouteActivatorService } from "./events/services/router-services/event-detail-route-activator.service";

export const appRoutes: Routes = [
    { path: 'events/create', component: EventCreateComponent },
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventDetailComponent, canActivate: [EventDetailRouteActivatorService] },
    { path: '404', component: PageNotFoundComponent },
    { path: '', redirectTo: 'events', pathMatch: 'full' },
];