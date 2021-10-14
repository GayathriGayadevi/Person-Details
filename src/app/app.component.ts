import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  personList = [];
  personDetails = {
    firstName: '',
    lastName: '',
    email: null,
    phoneNumber: null,
    address: null,
    id: null
  };
  addressList = ['address 1', 'address 2', 'address 3'];
  isAdd = false;
  isEdit = false;

  resetPersonDetails = () => {
    this.personDetails = {
      firstName: '',
      lastName: '',
      email: null,
      phoneNumber: null,
      address: null,
      id: null
    };
  };

  showAddPerson = () => {
    this.resetPersonDetails();
    this.isAdd = true;
  };
    
  addPerson = () => {
    this.personDetails.id = this.personDetails.firstName + this.personDetails.lastName;
    this.personList.push({...this.personDetails});
    this.resetPersonDetails();
    this.isAdd = false;
  };

  showEditPerson = (id) => {
    this.personDetails = {...this.personList.find(person => person.id === id)};
    this.isEdit = true;
  };

  editPerson = () => {
    this.personList = this.personList.map(person => person.id === this.personDetails.id ? this.personDetails : person);
    this.isEdit = false;
  };

  deletePerson = (id) => {
    this.personList = this.personList.filter(person => person.id !== id);
  };

  cancel = () => {
    this.isAdd = false;
    this.isEdit = false;
    this.resetPersonDetails();
  };
}
