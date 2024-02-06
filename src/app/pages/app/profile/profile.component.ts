import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { Board, User } from '../../../models/app.models';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import { ActivityComponent } from './components/activity/activity.component';
import { ProfileDataComponent } from './components/profile/profile.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatTabsModule, MatDividerModule, ActivityComponent, ProfileDataComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  private profileService = inject(ProfileService)
  profile : User | null = null
  boards: Board[] | null =  null

  ngOnInit(){
    this.getProfile()
    this.getBoards()
  }

  getProfile(){
    this.profileService.getProfile().subscribe({
      next: (data) => {
        this.profile = data
      },
      error: error => {
        console.log(error)
      }
    })
  }

  getBoards(){
    this.profileService.getBoards().subscribe({
      next: data => {
        this.boards = data
      },
      error: error => {
        console.log(error)
      }
    })
  }
}
