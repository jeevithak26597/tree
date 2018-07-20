import { Injectable } from '@angular/core';

@Injectable()
export class HelloService {

  constructor() { 
    let x =100;
  }

  sayHello(name) {
    if (name === 'Ram') {
      return "HELLO " + 'Ram';
    }
    return "Hello " + name;
  }

}
