import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PersonsService } from "./persons.service";

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})

export class PersonInputComponent {
  enteredPersonName = '';

  constructor(private personsService: PersonsService) {}

  onCreatePerson() {
    console.log('Person created! ' + this.enteredPersonName);
    this.personsService.addPerson(this.enteredPersonName);
    this.enteredPersonName = '';
  }
}