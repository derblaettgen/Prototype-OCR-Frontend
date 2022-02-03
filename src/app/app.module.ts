import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ocrModule } from './features/ocr/ocr.module';

@NgModule({
  imports: [BrowserModule, FormsModule, ocrModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
