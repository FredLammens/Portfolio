import { LoadingModule } from './loading/loading.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgmodelchangedebounceModule } from './ngmodelchangedebounce/ngmodelchangedebounce.module';

@NgModule({
  imports: [CommonModule],
  declarations : [],
  exports: [LoadingModule,NgmodelchangedebounceModule]
})
export class UtilModule {}
