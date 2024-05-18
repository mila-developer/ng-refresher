import { CommonModule} from "@angular/common";
import { Component, Input } from "@angular/core";

@Component ({
selector: 'app-persons',
templateUrl: './persons.component.html',
standalone: true,
imports: [CommonModule]
})

export class PersonsComponent {
  @Input() personList: string[] | undefined;
}