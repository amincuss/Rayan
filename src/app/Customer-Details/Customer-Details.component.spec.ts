import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { CustomerService } from '../service/customer.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CustomerDetailsComponent } from "./Customer-Details.component";
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe("CustomerDetailsComponent", () => {
  let component: CustomerDetailsComponent;
  let fixture: ComponentFixture<CustomerDetailsComponent>;
  let myService:CustomerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerDetailsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: CustomerService},{ provide: MessageService},{ provide: DialogService, useValue: {} }],
      imports: [  HttpClientModule,
          RouterTestingModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    myService = TestBed.inject(CustomerService);
  });

  describe('method1', () => {
    it('Customer Detail ', () => {
      expect(component).toBeTruthy();
    });
  });
})