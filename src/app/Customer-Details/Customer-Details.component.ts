import { Component, OnInit } from '@angular/core';
// Angular imports
import {ActivatedRoute} from '@angular/router';
// Local imports
import { CustomerService } from '../service/customer.service';
import { Customer } from '../model/Customer';
@Component({
  selector: 'app-Customer-Details',
  templateUrl: './Customer-Details.component.html'
})
export class CustomerDetailsComponent implements OnInit {
 name:string|undefined;
  customer!:Customer;
  goBackUrl = '..';

  constructor(private customerService: CustomerService, private route: ActivatedRoute) {
  }

  ngOnInit() {
     this.name = this.route.snapshot.paramMap.get('id')?.toString();
    this.customerService.get(Number (name)).subscribe(data => this.customer = data);
  }
}
