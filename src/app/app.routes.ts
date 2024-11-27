import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user.component';

export const routes: Routes = [
    {
        path:"",
        component : HomeComponent
    },

    {
        path:"edit/:id",
        component:EditUserComponent
    },
    {
        path:"add",
        component: AddUserComponent
    }
];
