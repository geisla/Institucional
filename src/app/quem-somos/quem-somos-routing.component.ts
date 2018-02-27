import { NgModule } from "@angular/core/src/metadata/ng_module";
import { RouterModule } from "@angular/router";
import { QuemSomosComponent } from "./quem-somos.component";

@NgModule({
    imports:[
        RouterModule.forChild([
            {path: 'quem-somos', component: QuemSomosComponent}
        ])
    ],
    exports:[
        RouterModule
    ]
})

export class NossaVisaoRoutingModule{

}