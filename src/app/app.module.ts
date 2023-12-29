import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ToastrModule } from 'ngx-toastr';
import { CoreModule } from './core/core.module';
import { MaterialModule } from './material/material.module';
@NgModule({
  declarations: [
    AppComponent,   
  ],
  imports: [
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatInputModule,
    MatFormFieldModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
    MatTableModule,
    CoreModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })
    // NgxSpinnerModule.forRoot({ type: 'square-jelly-box' })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
