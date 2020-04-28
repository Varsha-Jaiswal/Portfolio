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
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ContactComponent,
    TalkComponent,
    WorkComponent,
    BioComponent,
    HomePageComponent,
    HomeDataComponent,
    FooterComponent,
    HeaderComponent,
    ScrollToTopComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
