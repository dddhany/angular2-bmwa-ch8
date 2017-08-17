import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from "./app.component";
import { Safe } from "./safe";
import { AppMaterialModule } from "./app-material.module";
import { BookStoreService } from "./books";
import { MasterDetailComponent } from "./books/master-detail/master-detail.component";

@NgModule({
  declarations: [AppComponent, Safe, MasterDetailComponent],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppMaterialModule
  ],
  providers: [BookStoreService],
  bootstrap: [AppComponent]
})
export class AppModule {}
