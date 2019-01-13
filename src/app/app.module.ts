import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { ModalDirective } from './modal.directive';
import { DatacontainerDirective } from './modal-dialog/datacontainer.directive';
import { ComponentLoaderService } from './component-loader.service';

//import { ModalDialogDirective } from './modal-dialog/modal-dialog.directive';

@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    Demo2Component,
    ModalDialogComponent,
    ModalDirective,
    DatacontainerDirective
  ],  
  providers: [ComponentLoaderService],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  entryComponents: [
    Demo1Component,
    Demo2Component,
    ModalDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
