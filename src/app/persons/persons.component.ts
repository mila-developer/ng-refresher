import { CommonModule} from "@angular/common";
import { Component, OnDestroy, OnInit} from "@angular/core";
import { PersonsService } from "./persons.service";
import { Subscription } from "rxjs";
import { routes } from "../app.routes";
import { RouterModule } from "@angular/router";

@Component ({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  standalone: true,
  imports: [CommonModule]
})

export class PersonsComponent implements OnInit, OnDestroy {
  personList: string[] = [];
  private personListSubs!: Subscription;
  // private personsService: PersonsService;

  constructor(private prsService: PersonsService) {
   // this.personList = prsService.persons;
   // this.personsService = prsService;
  }
  ngOnInit(): void {
    this.personListSubs = this.prsService.personsChanged.subscribe(persons => {
      this.personList = persons;
    });
    this.prsService.fetchPersons();
  }

  onRemovePerson(personName: string) {
    this.prsService.removePerson(personName);
  }

  ngOnDestroy() {
    this.personListSubs.unsubscribe();
  }
}