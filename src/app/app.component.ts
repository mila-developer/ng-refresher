import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonsComponent } from './persons/persons.component';
import { PersonInputComponent } from "./persons/person-input.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PersonsComponent, PersonsComponent, PersonInputComponent]
})

export class AppComponent {
  persons: string[] = [ 'Max', 'Manu', 'Anna' ];
}
