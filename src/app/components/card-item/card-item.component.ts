import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent {
  @Input() src:any;
  @Input() title:any;
  @Input() subTitle:any;

}
