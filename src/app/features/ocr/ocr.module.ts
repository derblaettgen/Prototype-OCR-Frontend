import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OcrComponent } from './ocr.component';
import { OcrTextListComponent } from './ocr-text-list/ocr-text-list.component';
import { OcrCanvasComponent } from './ocr-canvas/ocr-canvas.component';

@NgModule({
  imports: [CommonModule],
  declarations: [OcrComponent, OcrTextListComponent, OcrCanvasComponent],
  exports: [OcrComponent],
})
export class ocrModule {}
