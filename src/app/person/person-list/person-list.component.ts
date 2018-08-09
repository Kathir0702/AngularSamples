import { Component, OnInit } from '@angular/core';
import { PersonService } from '../shared/person.service';
import { Person } from '../shared/person.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  personList: Person[] = [];
  constructor(private personService: PersonService, private tostr: ToastrService) { }
  ngOnInit() {
    var x = this.personService.getData();
    x.snapshotChanges().subscribe(item => {
      this.personList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.personList.push(y as Person);
      });
    });
  }
 
  onEdit(person: Person) {
    this.personService.selectedPerson = Object.assign({}, person);
  }
 
  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.personService.deletePerson(key);
      this.tostr.warning("Deleted Successfully", "Person register");
    }
  }

}
