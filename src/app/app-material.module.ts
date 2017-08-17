import { NgModule } from "@angular/core";
import { MdSidenavModule, MdListModule } from "@angular/material";
const MATERIAL_MODULES = [MdSidenavModule, MdListModule];
@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES
})
export class AppMaterialModule {}
