import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {firstCapital} from './firstLetterCapital.pipe';
import { AppComponent } from './app.component';
import { TaskComponent } from '../tasks/tasks.component';
import { ChildComponent } from './child';
import { AlertModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AppComponent,ChildComponent,firstCapital
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent,ChildComponent]
})
export class AppModule { }
