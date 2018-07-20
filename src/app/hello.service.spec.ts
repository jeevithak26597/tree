import { TestBed, inject } from '@angular/core/testing';

import { HelloService } from './hello.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('HelloService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HelloService, HttpClient]
    });
  });

  it('should be created', inject([HelloService], (service: HelloService) => {
    expect(service).toBeTruthy();
  }));

  it('verify the sayHello service method is returning HELLO Ram when name is Ram', inject([HelloService],
      (service:HelloService) => {
        expect(service.sayHello("Ram")).toBe('HELLO ' + 'Ram');
  }));
  it('verify the sayHello service method is returning Hello + <string> when name is not Ram', inject([HelloService],
    (service:HelloService) => {
      expect(service.sayHello("Narasing")).toBe('Hello ' + 'Narasing');
  }));
});