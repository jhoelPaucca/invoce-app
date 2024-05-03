import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../model/invoice';
import { InvoiceViewComponent } from '../../components/invoice-view/invoice-view.component';
import { ClientViewComponent } from '../../components/client-view/client-view.component';
import { CompanyViewComponent } from '../../components/company-view/company-view.component';
import { ListItemsComponent } from '../../components/list-items/list-items.component';
import { RowItemComponent } from '../../components/row-item/row-item.component';


@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [InvoiceViewComponent,ClientViewComponent,CompanyViewComponent,ListItemsComponent,RowItemComponent],
  templateUrl: './invoice.component.html',
})

export class InvoiceComponent implements OnInit{

  invoice!: Invoice;

  constructor(private service: InvoiceService){}

  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }
    
  
}
