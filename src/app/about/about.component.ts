import { Component, Input, OnInit,Output,EventEmitter, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Employee } from '../employee';
import { GlobalService } from '../global.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name','phone', 'username', 'website','email','company','address',];
  @ViewChild(MatPaginator,{static:false}) paginator: MatPaginator;
  templatelist:any;
public da = new Employee();
  constructor(private global:GlobalService){
    this.global.getJson().subscribe((res:any)=>{
      console.log(this.templatelist=res)
      this.templatelist = new MatTableDataSource<Employee>(res);
      this.templatelist.paginator = this.paginator;
      // this.templatelist.sort = this.sort;
    })
    
  }

 

  ngOnInit() {
  
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.templatelist.filter = filterValue.trim().toLowerCase();
  }
}

