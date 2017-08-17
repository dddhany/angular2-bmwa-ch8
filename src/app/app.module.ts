import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { Safe } from "./safe";

import { BookStoreService } from "./books";

@NgModule({
  declarations: [AppComponent, Safe],
  imports: [BrowserModule, HttpModule, BrowserAnimationsModule],
  providers: [BookStoreService],
  bootstrap: [AppComponent]
})
export class AppModule {}
