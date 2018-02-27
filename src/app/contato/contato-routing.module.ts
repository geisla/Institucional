import { NgModule } from "@angular/core/src/metadata/ng_module";
import { RouterModule } from "@angular/router";
import { ContatoComponent } from "./contato.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: 'contato', component: ContatoComponent}
        ])
    ],
    exports:[
        RouterModule
    ]   

})

export class ContatoRoutingModule{
    
}