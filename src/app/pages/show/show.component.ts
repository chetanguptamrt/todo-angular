import { Component, OnInit } from '@angular/core';
import { ListService, ListTemplate } from 'src/app/services/list.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})

export class ShowComponent implements OnInit {

  constructor(private listService:ListService, private router: Router, private snack: MatSnackBar) { 
     this.dataSource.data = this.listService.list
  }

  ngOnInit(): void {
  }
  
  displayedColumns: string[] = ['position', 'name', 'price', 'tax', 'total', 'action'];
  dataSource = new MatTableDataSource<ListTemplate>()

  refresh(): void {
      this.dataSource.data = this.listService.list;
  }
  
  deleteProduct(i:any): void {
    this.listService.deleteProduct(i)
    this.refresh()
    this.snack.open("Delete product successfully!","ok")
  }

  editProduct(i:any): void {
    this.router.navigateByUrl("/edit/"+i)
  }

}
