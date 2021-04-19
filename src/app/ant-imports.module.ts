import { NgModule } from "@angular/core";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTreeViewModule } from 'ng-zorro-antd/tree-view';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

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
        NzTreeViewModule
    ],
    providers: []
})
export class AntImportsModule { }