import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';

import { NavbarComponent } from './shared/components/navbar/navbar.component';

import { EventService } from './events/services/data-services/event.service';
import { ToastrService } from './shared/services/toastr/toastr.service';
import { EventDetailRouteActivatorService } from './events/services/router-services/event-detail-route-activator.service';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventCreateComponent } from './events/event-create/event-create.component';

import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

import { appRoutes } from './routes';



@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailComponent,
    EventCreateComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes) // Learn more about this ?
  ],
  providers: [EventService, ToastrService, EventDetailRouteActivatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
