import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { InvoiceComponent } from './app/componets/invoice/invoice.component';

bootstrapApplication(InvoiceComponent, appConfig)
  .catch((err) => console.error(err));
