import {NgModule} from '@angular/core';
import {BrowserModule, HammerModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AboutComponent} from './about/about.component';
import {SkillsComponent} from './skills/skills.component';
import {ContactComponent} from './contact/contact.component';
import {ResumeComponent} from './resume/resume.component';
import {ProjectsComponent} from './projects/projects.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AppRoutingModule} from './app-routing.module';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {ProjectCardComponent} from './project-card/project-card.component';
import {WorkExperienceCardComponent} from './work-experience-card/work-experience-card.component';
import {SkillCardComponent} from './skill-card/skill-card.component';
import {FooterComponent} from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import {HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';

export class CustomHammerConfig extends HammerGestureConfig  {
  override overrides = <any>{
      'swipe': {direction: Hammer.DIRECTION_HORIZONTAL},
      'pinch': { enable: false },
      'rotate': { enable: false }
  }

  override options = {
    touchAction: 'pan-y'
  };
}

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent,
    ResumeComponent,
    ProjectsComponent,
    NavbarComponent,
    ProjectCardComponent,
    WorkExperienceCardComponent,
    SkillCardComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    HammerModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: CustomHammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
