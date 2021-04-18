import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
    infoForm: FormGroup;
    passwordForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService
    ) {}

    formInfo() {
        return (this.infoForm = this.formBuilder.group({
            first_name: '',
            last_name: '',
            mail: '',
        }));
    }

    formPassword() {
        return (this.passwordForm = this.formBuilder.group({
            password: '',
            password_confirm: '',
        }));
    }

    ngOnInit(): void {
        this.formInfo();
        this.formPassword();
    }

    infoSubmit(): void {
        this.authService.updateInfo(this.infoForm.getRawValue()).subscribe((res)=>{
          console.log(res)
        });
    }

    passwordSubmit(): void {
        this.authService.updateUserPassword(this.passwordForm.getRawValue()).subscribe((res)=>{
          console.log(res)
        });
    }
}
