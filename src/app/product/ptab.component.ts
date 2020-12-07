import { Component } from '@angular/core';
@Component({

   selector:"ptab",
   templateUrl:"./ptab.component.html",
   styleUrls:["./ptab.component.css"],
})
export class PtabComponent
{
   
    name:string="vedanti";
    sal=2345;
    flag=false;
    parr=[{id:100,name:"ashwini",sal:1200},
    {id:120,name:"shraddha",sal:8900},
    {id:130,name:"geeta",sal:6700}];
    flag1=false;

    changeflag()
    {
       this.flag=!this.flag; 
    }
}