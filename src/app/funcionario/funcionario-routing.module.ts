import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { 
    LancamentoComponent,
    ListagemComponent,
    FuncionarioComponent
} from './components';

export const FuncionarioRoutes: Routes = [
    {
        path: 'funcionario',
        component: FuncionarioComponent,
        children: [
            {
                path: '',
                component: LancamentoComponent
            },
            {
                path: 'listagem',
                component: ListagemComponent
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(FuncionarioRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class FuncionarioRoutingModule {
    
}