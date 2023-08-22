import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { EchartsComponent } from './echarts/echarts.component';
import { SimplechartComponent } from './simplechart/simplechart.component';
import { RandomDatasetChartComponent } from './random-dataset-chart/random-dataset-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    EchartsComponent,
    SimplechartComponent,
    RandomDatasetChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
