import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent {
  @Input() src!:string;
  @Input() title!:string;
  @Input() subTitle!:string;

}
