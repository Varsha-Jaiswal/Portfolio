import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSnackBarModule, MatSnackBar } from '@angular/material';
import { ServiceWorkerModule, SwUpdate } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { environment } from '../environments/environment';

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
    BrowserModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(update: SwUpdate, snackBar: MatSnackBar) {
    update.available.subscribe(update => {
      // Aloow refresh from snackbar
      const snack = snackBar.open('Update Available', 'Reload');
      snack.onAction().subscribe(() => {
        window.location.reload();
      });
    });
  }
}
