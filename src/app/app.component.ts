import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
@Component({
  selector: 'app-root',
  imports: [AppRoutingModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
