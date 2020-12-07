import { Component } from '@angular/core';
@Component({
selector:"plist",
templateUrl:"./plist.component.html",
styleUrls:['./plist.component.css'],
})

export class PlistComponent
{
    larr=[{author:"tecmax",name:"java",price:1200},
    {author:"technical",name:"cpp",price:1270},
    {author:"tecmax",name:"c",price:600}];

    
}
