import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: '<input (keyup)="updateModel(input.value)" #input>{{model.message}}',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  model = {
    message: "Hello World!"
  };

  updateModel(newMessage:string) {
    this.model.message = newMessage;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
