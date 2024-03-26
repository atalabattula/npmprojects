import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// // import { MyLibraryModule } from '../../projects/my-library/src/public-api';
// import { MyLibraryModule } from '../../dist/my-library/public-api';
// // import { MyLibraryModule } from 'my-library'; 
import {MyLibraryModule} from 'my-library-basic-button'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyLibraryModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
