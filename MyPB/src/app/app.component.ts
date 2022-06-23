import { Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MyPB';

  
  displayedColumns: string[] = ['asA', 'iWant', 'soThat', 'action']
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog : MatDialog, private api: ApiService) {
    
  }
  // to add after
  ngOnInit(): void {
    this.getAllUS();
  }

  
  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
      
    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        this.getAllUS();
      }
    })
  }
  //to add after
  getAllUS(){
  this.api.getUS()
    .subscribe({
      next:(res)=>{
       this.dataSource = new MatTableDataSource(res);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort
      },
      error:(err)=>{
        alert("Error while fetching the US")
      }
    })
  }
  editUS(row: any) {
    this.dialog.open(DialogComponent, {
      width: '30%',
      data: row
    }).afterClosed().subscribe(val=>{
      if(val === 'update'){
        this.getAllUS();
      }
    })
  }
  deleteUS(id:number){
    this.api.deleteUS(id)
    .subscribe({
      next:(res)=>{
        alert("US deleted successfully");
        this.getAllUS();
      },
      error:()=>{
        alert("ERROR")
      }
    })
      

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
