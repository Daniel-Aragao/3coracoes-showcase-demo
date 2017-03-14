import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { DetailComponent } from './detail/detail.component';
import { CardComponent } from './showcase/card/card.component';

import { ExpressoService } from './expresso.service';

import { SimpleMoneyPipe } from './pipe/simplemoney.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShowcaseComponent,
    DetailComponent,
    ShowcaseComponent,
    CardComponent,
    SimpleMoneyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [ExpressoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
