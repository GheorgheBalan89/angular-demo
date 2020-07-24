import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WarningAlertComponent} from './alerts/warning.alert.component/warning.alert.component';
import { SuccessAlertComponent} from './alerts/success.alert.component/success.alert.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    // Bootstrap
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
