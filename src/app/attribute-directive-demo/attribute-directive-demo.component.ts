import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive-demo',
  templateUrl: './attribute-directive-demo.component.html',
  styleUrls: ['./attribute-directive-demo.component.css']
})
export class AttributeDirectiveDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isHighlighted(){
    let highlight = false;
    if(highlight){
      return "red";
    }else{
      return "blue";
    }
  }


  isVisible(visible : boolean){
    if(visible){
      return 'darkTheme';
    }else{
      return 'lightTheme';
    }
  }
}
