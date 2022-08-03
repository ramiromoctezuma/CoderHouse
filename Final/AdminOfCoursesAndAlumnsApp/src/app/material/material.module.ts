import { NgModule } from "@angular/core";

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";


import { MatOptionModule, MAT_DATE_LOCALE } from "@angular/material/core";

@NgModule({
    exports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule
    ],
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'es-MX' }
    ],
})
export class MaterialModule {}