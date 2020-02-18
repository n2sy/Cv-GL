import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { FormsModule} from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { CvComponent } from './cv/cv.component';
import { ListeComponent } from './liste/liste.component';
import { ItemComponent } from './item/item.component';
import { DetailComponent } from './detail/detail.component';
import { CustomDirDirective } from './custom-dir.directive';
import { MiniwordComponent } from './miniword/miniword.component';
import { NoImagePipe } from './no-image.pipe';
import { RecruesComponent } from './recrues/recrues.component';
import { ROUTING } from './routing';
import { NavbarComponent } from './navbar/navbar.component';
import { InfoComponent } from './info/info.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    ChildComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailComponent,
    CustomDirDirective,
    MiniwordComponent,
    NoImagePipe,
    RecruesComponent,
    NavbarComponent,
    InfoComponent,
    AddComponent
  ],
  imports: [
  BrowserModule,
    FormsModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
