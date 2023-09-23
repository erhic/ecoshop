import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedFeaturesModule { }
