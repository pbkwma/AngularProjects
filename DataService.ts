import { Injectable } from "@angular/core";


@Injectable ( {

    providedIn : 'root'
})


export class DataService
{
    private message: string = "Hello from the Data Service!";

  constructor() {}

  getMessage() {
    return this.message;
  }

  setMessage(newMessage: string) {
    this.message = newMessage;
  }
}