import { Component, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { ButtonComponent } from '../../../../../components/button/button.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../../../services/auth.service';
import { User } from '../../../../../models/app.models';
import { ProfileService } from '../../../../../services/profile.service';

@Component({
  selector: 'app-profile-data',
  standalone: true,
  imports: [MatDividerModule, ButtonComponent, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileDataComponent {
  private formBuilder = inject(FormBuilder)
  private profileService = inject(ProfileService)
  private authService = inject(AuthService)

  formProfile = this.formBuilder.nonNullable.group({
    name: [''],
    avatar: ['']
  })

  user : User | null = null

  ngOnInit(){
    this.authService.user$.subscribe({
      next: data =>{
        this.user = data
      }
    })
  }

  updateProfile(){
    const {name, avatar} = this.formProfile.getRawValue()
    if(name && avatar){
      this.profileService.updateProfile(name, avatar, this.user!.id).subscribe({
        next: data =>{
          console.log(data)
        },
        error: error => {
          console.log(error)
        }
      })
    }
  }
}
