import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ListService, ListTemplate } from 'src/app/services/list.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id

  constructor(private route: ActivatedRoute, 
      private router:Router,
      private listService:ListService, 
      private snack: MatSnackBar) {

    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id==null){
      this.router.navigateByUrl("/show")
    }
    this.data = this.listService.getProduct(this.id)
    if(this.data==undefined){
      this.router.navigateByUrl("/show")
    }

  }

  ngOnInit(): void {
  }

  data!:ListTemplate 

  submitForm(){
    if(this.data.name.trim()=="" || this.data.price==null || this.data.tax==null || this.data.price==0){
      this.snack.open("All field required!","ok");
    } else {
      this.listService.updateProduct(this.data,this.id)
      this.snack.open("Product update successfully!","ok");
    }
  }

}
