import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Person} from './person.model';
@Injectable()
export class PersonService {
  personList: AngularFireList<any>;
  selectedPerson: Person = new Person();
  constructor(private firebase :AngularFireDatabase ) { }
  ngOnInit() {
    this.personList = this.getData();
  }
  getData(){
    this.personList = this.firebase.list('person');
    return this.personList;
  }

  insertPerson(person : Person)
  {
    this.personList = this.firebase.list('person');
    console.log(this.personList);
    this.personList.push({
      name: person.name,
      age:person.age,
      city:person.city
    });
  }

  updatePerson(person : Person){
    this.personList.update(person.$key,
      {
        name: person.name,
        age:person.age,
        city:person.city
      });
  }

  deletePerson($key : string){
    this.personList.remove($key);
  }

}