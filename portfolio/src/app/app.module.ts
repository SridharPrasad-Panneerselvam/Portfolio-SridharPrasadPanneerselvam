import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatCardModule} from '@angular/material/card';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { NavComponent } from './nav/nav.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { MatButtonModule } from '@angular/material/button';
import { WorkComponent } from './work/work.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { MaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    ContactComponent,
    EducationComponent,
    ExperienceComponent,
    FooterComponent,
    HomeComponent,
    IntroComponent,
    NavComponent,
    ProjectsComponent,
    SkillsComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
