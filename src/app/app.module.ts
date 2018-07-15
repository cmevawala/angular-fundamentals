import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

import { EventService } from './events/services/event.service';
import { ToastrService } from './shared/services/toastr/toastr.service';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EventService, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
