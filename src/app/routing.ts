import { Routes, RouterModule } from "@angular/router";
import { ColorComponent } from './color/color.component';
import { CvComponent } from './cv/cv.component';
import { MiniwordComponent } from './miniword/miniword.component';
import { ChildComponent } from './child/child.component';
import { InfoComponent } from './info/info.component';
import { AddComponent } from './add/add.component';



const routes : Routes = [
    { path: '', component:ChildComponent},
    { path:'color', component: ColorComponent},
    { path:'cv', component: CvComponent},
    { path:'cv/:id', component: InfoComponent},
    { path:'add', component: AddComponent},
    { path:'word', component: MiniwordComponent}
];

export const ROUTING = RouterModule.forRoot(routes);