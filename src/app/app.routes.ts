import { Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: '', component: AppComponent},
    {path: 'create', component: CreateComponent},
    {path: 'edit', component: EditComponent},
    {path: 'delete', component: DeleteComponent},
 
];
