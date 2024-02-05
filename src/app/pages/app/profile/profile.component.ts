import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { Board, User } from '../../../models/app.models';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
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
