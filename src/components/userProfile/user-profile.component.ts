import { Component, Input } from '@angular/core';

interface UserProfileData {
  image: string;
  name: string;
  location: string;
}

@Component({
  selector: 'user-profile',
  templateUrl: 'user-profile.component.html',
})

export class UserProfileComponent {
  @Input()  userProfileData: UserProfileData;

  constructor() {
    this.userProfileData = {
      image: 'assets/imgs/fishable-banner.png',
      name: 'Jane Doe',
      location: 'Sacramento, California'
    };
  }

}
