import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ListService, ListTemplate } from 'src/app/services/list.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private listService: ListService, private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  data:ListTemplate = {name:"", price:0, tax:0}

  submitForm(){
    if(this.data.name.trim()=="" || this.data.price==null || this.data.tax==null || this.data.price==0){
      this.snack.open("All field required!","ok");
    } else {
      this.listService.addProduct(this.data)
      this.data = {name:"", price:0, tax:0}
      this.snack.open("Product add successfully!","ok");
    }
  }

}
