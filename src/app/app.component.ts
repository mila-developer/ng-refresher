import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonsComponent } from './persons/persons.component';
import { PersonInputComponent } from "./persons/person-input.component";
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-rounting.module';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PersonsComponent, PersonInputComponent, FormsModule]
})

export class AppComponent {
}
