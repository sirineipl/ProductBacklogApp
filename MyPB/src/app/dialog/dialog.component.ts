import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { MatDialogRef} from '@angular/material/dialog';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit{

  pbForm !: FormGroup;
  constructor(private FormBuilder: FormBuilder, private api: ApiService, private dialogRef: MatDialogRef<DialogComponent>) { }

  
  ngOnInit(): void {

    //form for warning alert
    /*this.pbForm = this.FormBuilder.group({
      asA: ['',Validators.required],
      soThat: ['',Validators.required],
      iWant: ['',Validators.required]
    })*/
  }
 
  ////to add warning in pbform and must be called in save
  /*addUs(){
    console.log(this.pbForm.value);
  }*/

}
