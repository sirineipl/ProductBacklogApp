import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { MatDialogRef} from '@angular/material/dialog';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit{

  pbForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private api: ApiService, private dialogRef: MatDialogRef<DialogComponent>) { }

  
  ngOnInit(): void {

    //form for warning alert
    this.pbForm = this.formBuilder.group({
      asA: ['',Validators.required],
      iWant: ['',Validators.required],
      soThat: ['',Validators.required]
    })
  }
 
  ////to add warning in pbform and must be called in save
  addUs(){
    if(this.pbForm.valid){
      this.api.postUS(this.pbForm.value)
    }
  }

}
