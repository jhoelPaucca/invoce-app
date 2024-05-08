import { Component, Input} from '@angular/core';
import { client } from '../../model/client';

@Component({
  selector: 'client-view',
  standalone: true,
  imports: [],
  templateUrl: './client-view.component.html',
})
export class ClientViewComponent {
  
 @Input() client: client = new client();
}
