import { Component, OnInit } from '@angular/core';
import { PersonService } from './shared/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  providers:[PersonService]
})
export class PersonComponent implements OnInit {

  constructor(private personService: PersonService) { }

  ngOnInit() {
  }

}
