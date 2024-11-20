import { Component, inject, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  fb:FormBuilder= inject(FormBuilder);
  subForm!:FormGroup;
  private router:Router=inject(Router);
  private readonly donnees={admin:'admin',mdp:'123123.'};

  ngOnInit(): void {
    this.subForm=this.fb.nonNullable.group(
      {
        admin:['',[Validators.required]],
        mdp:['',[Validators.required]]
      }
    )
  }
  get admin(){
    return this.subForm.get('admin');
  }
  get mdp(){
    return this.subForm.get('mdp');
  }
  public isOblig(controlName:string){
    const control=this.subForm.get(controlName);
    return control?.errors?.['required'] && control?.touched;
  }
  onResetF(){
    this.subForm.reset();
  }
  onSubmit(){
    if(this.subForm.valid){
      const adm=this.admin?.value;
      const mdp=this.mdp?.value;
      if(adm === this.donnees.admin && mdp == this.donnees.mdp){
        this.router.navigate(['/']);
      }else{
        alert('Identifiant ou mot de passe invalide');
      }
    }
  }
}
