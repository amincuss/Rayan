import { PhoneNumber, PhoneNumberUtil } from 'google-libphonenumber';
// Angular imports
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
// PrimeNG imports
import {MessageService, PrimeNGConfig} from 'primeng/api';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
// Local imports
import { Customer } from './../model/Customer';
import { CustomerService } from '../service/customer.service';
import { CustomerSaveModeComponent } from '../Customer-Save-Mode/Customer-Save-Mode.component';

@Component({
  selector: 'app-Customer-List',
  templateUrl: './Customer-List.component.html'

})
export class CustomerListComponent implements OnInit {

 public customer!: Customer[];
  selectedCustomer!: Customer;

  constructor(private customerService: CustomerService, private router: Router, private primengConfig: PrimeNGConfig, private messageService: MessageService, public dialogService: DialogService) {
  }

  ngOnInit() {
    this.customerService.getAll().subscribe(data => this.customer = data);    

    this.primengConfig.ripple = true;
  }

  onRowSelect($event: any) {
  
    this.router.navigate(['customer', $event.data.id]);
  }

  deleteCustomer(customer: Customer) {
    this.customerService.delete(customer.id).subscribe(() => {
      this.messageService.add({severity: 'success', summary: 'Success', detail: 'Customer deleted'});
    });
  }

  openCreateModal() {
    const ref = this.openModal(new Customer(), 'Add customer');
    ref.onClose.subscribe((customer: Customer) => {
      if (customer) {
        this.customerService.create(customer).subscribe(() => {
          this.messageService.add({severity: 'success', summary: 'Success', detail: 'Customer created'});
        });
      }
    });
  }

  openEditModal(selectedCustomer: Customer) {
   
    const ref = this.openModal(selectedCustomer, 'Edit customer');
    ref.onClose.subscribe((customer: Customer) => {
      if (customer) {
        this.customerService.update(customer.id, customer).subscribe(() => {
          this.messageService.add({severity: 'success', summary: 'Success', detail: 'Customer updated'});
        });
      }
    });
  }

  openModal(customer: Customer, header: string): DynamicDialogRef {

    return this.dialogService.open(CustomerSaveModeComponent, {
      data: {customer},
    
      header,
      contentStyle: {'max-height': '800px', 'overflow': 'auto'},
      baseZIndex: 10000
    });
  }

}
