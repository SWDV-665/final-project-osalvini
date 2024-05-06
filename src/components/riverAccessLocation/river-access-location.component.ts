import { Component, Input } from '@angular/core';

@Component({
  selector: 'river-access-location',
  templateUrl: 'river-access-location.component.html',
})
export class RiverAccessLocationComponent {
  @Input() riverAccessLocation: any;
}
