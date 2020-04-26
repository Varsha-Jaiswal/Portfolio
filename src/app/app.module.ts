import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { TalkComponent } from './talk/talk.component';
import { WorkComponent } from './work/work.component';
import { BioComponent } from './bio/bio.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeDataComponent } from './home-data/home-data.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ContactComponent,
    TalkComponent,
    WorkComponent,
    BioComponent,
    HomePageComponent,
    HomeDataComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
