import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit{

  pbForm !: FormGroup;
  ActionBtn: String = "Save";
  constructor(private formBuilder: FormBuilder, private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef: MatDialogRef<DialogComponent>) { }

  
  ngOnInit(): void {

    //form for warning alert
    this.pbForm = this.formBuilder.group({
      asA: ['', Validators.required],
      iWant: ['', Validators.required],
      soThat: ['', Validators.required]
    });
    if (this.editData) {
      this.ActionBtn = "Update";
      this.pbForm.controls['asA'].setValue(this.editData.asA);
      this.pbForm.controls['iWant'].setValue(this.editData.iWant);
      this.pbForm.controls['soThat'].setValue(this.editData.soThat);


    }
  }
 
  ////to add warning in pbform and must be called in save
  addUs() {
    if (!this.editData) {
      if (this.pbForm.valid) {
        this.api.postUS(this.pbForm.value)
          .subscribe({
            next: (res) => {
              alert("US added successfully");
              this.pbForm.reset();
              this.dialogRef.close('save');
            },
            error: (err) => {
              alert("ERROR")
            }
          })
      }

    }
  }

}
