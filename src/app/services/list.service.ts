import { Injectable } from '@angular/core';

export interface ListTemplate {
  name: string,
  price: number,
  tax: number
}

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  list:ListTemplate[] = [
    {name: "Apple", price: 78000, tax: 28},
    {name: "Samsung Phone", price: 9990, tax: 18}
  ]

  addProduct(data:ListTemplate) {
    this.list.push(data)
  }
  getProduct(id:any) {
    return this.list[id];
  }
  updateProduct(data: ListTemplate,id:any) {
    this.list[id]=data
  }
  deleteProduct(id: any) {
    this.list.splice(id,1)
  }
}
