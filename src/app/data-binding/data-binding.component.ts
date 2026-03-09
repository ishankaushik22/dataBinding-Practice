import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
  name="";
  email="";
  dob=new FormControl();
  count=0;
  currentEmail(){
    console.log("email is", this.email);
  }
  onSubmitEmail(){
    if(!this.email){
      console.log("No Email found!");
      return;
    }
    console.log("email is", this.email);

  }
  onClear(){
    this.name="";
    this.email="";
  }

  onCountIncrement(n: number){
    this.count=this.count+n;
  }
}
