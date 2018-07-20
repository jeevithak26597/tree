import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { NodeService } from './node.service';
import { HttpClientModule } from '@angular/common/http';
import  { TreeModule } from 'primeng/tree';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TreeModule,
    FormsModule
  ],
  providers: [NodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
