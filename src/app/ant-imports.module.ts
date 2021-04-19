import { NgModule } from "@angular/core";
import { NzButtonModule, NzCheckboxModule, NzDatePickerModule, NzDrawerModule, NzEmptyModule, NzGridModule, NzIconModule, NzInputModule, NzListModule, NzModalModule, NzProgressModule, NzSelectModule, NzTableModule, NzTabsModule, NzTreeModule, NzTreeSelectModule } from "ng-zorro-antd";

@NgModule({
    declarations: [],
    exports: [
        NzButtonModule,
        NzIconModule,
        NzInputModule,
        NzModalModule,
        NzTabsModule,
        NzTableModule,
        NzGridModule,
        NzDatePickerModule,
        NzSelectModule,
        NzDrawerModule,
        NzListModule,
        NzEmptyModule,
        NzProgressModule,
        NzCheckboxModule,
        NzTreeModule
    ],
    providers: []
})
export class AntImportsModule { }