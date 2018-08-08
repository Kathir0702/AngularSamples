import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
 
import { PersonService } from '../shared/person.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css'],
  providers:[PersonService]
})
export class PersonDetailComponent implements OnInit {

  constructor(private personService: PersonService, private tostr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
 
  onSubmit(personForm: NgForm) {
    console.log(personForm.value);
    if (personForm.value.$key == null)
      this.personService.insertPerson(personForm.value);
    else
      this.personService.updatePerson(personForm.value);
    this.resetForm(personForm);
    this.tostr.success('Submitted Succcessfully', 'Person Register');
  }
 
  resetForm(personForm?: NgForm) {
    if (personForm != null)
      personForm.reset();
    this.personService.selectedPerson = {
      $key: null,
      name: '',
      age: 0,
      city:''
    }
  }
}
