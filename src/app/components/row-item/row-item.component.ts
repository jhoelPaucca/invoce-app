import { Component, Input } from '@angular/core';
import { Item } from '../../model/item';

@Component({
  selector: 'tr[row-item]',
  standalone: true,
  imports: [],
  templateUrl: './row-item.component.html',
})
export class RowItemComponent {

    @Input() item!: Item;
}
