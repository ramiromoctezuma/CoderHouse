import { NgModule } from "@angular/core";

import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatFormFieldModule       } from "@angular/material/form-field";
import { MatGridListModule        } from "@angular/material/grid-list";
import { MatSnackBarModule        } from "@angular/material/snack-bar";
import { MatSidenavModule         } from "@angular/material/sidenav";
import { MatToolbarModule         } from "@angular/material/toolbar";
import { MatButtonModule          } from "@angular/material/button";
import { MatDialogModule          } from "@angular/material/dialog";
import { MatInputModule           } from "@angular/material/input";
import { MatTableModule           } from "@angular/material/table";
import { MatIconModule            } from "@angular/material/icon";
import { MatCardModule            } from "@angular/material/card";
import { MatListModule            } from "@angular/material/list";


import { MatOptionModule, MAT_DATE_LOCALE } from "@angular/material/core";

@NgModule({
    exports: [
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatGridListModule,
        MatSnackBarModule,
        MatSidenavModule,
        MatToolbarModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatListModule,
        MatTableModule,
        MatCardModule,
        MatInputModule
    ],
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'es-MX' }
    ],
})
export class MaterialModule {}