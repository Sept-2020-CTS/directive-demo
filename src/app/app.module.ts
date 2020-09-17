import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AttributeDirectiveDemoComponent } from './attribute-directive-demo/attribute-directive-demo.component';
import { StructuralDirectiveDemoComponent } from './structural-directive-demo/structural-directive-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    AttributeDirectiveDemoComponent,
    StructuralDirectiveDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
