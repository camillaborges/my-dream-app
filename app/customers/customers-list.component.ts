import { Component, OnInit } from 'angular/core';

@Component({
    selector: 'app-customers-list',
    templateUrl: '.customers.list.html'
})

export class CustomersListComponent implements OnInit {

    filteredCustomers: any [];
    customerOrderTotal: number; 
    customersOrderTotal: 'USD';


    constructor() {}

    ngOnInit() {
        
    }
}