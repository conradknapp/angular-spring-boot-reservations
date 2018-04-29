import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public submitted: boolean;
    
  roomsearch: FormGroup;
  rooms: Room[];
    
    ngOnInit() {
      this.roomsearch = new FormGroup({
        checkin: new FormControl(''),
        checkout: new FormControl('')   
      });
        
      this.rooms = ROOMS;
    }
    
    onSubmit({ value, valid }: { value: Roomsearch, valid: boolean }) {
      console.log(value);
    };
    
    reserveRoom(value: string) {
       console.log(value);   
    }
}

export interface Roomsearch {
      checkin: string;
      checkout: string; 
 }

export interface Room {
    id: string;
    roomNumber: string;
    price: string;
    links: string;

}

var ROOMS:Room[] = [
  {
    "id": "alsdfkja",
    "roomNumber": "1",
    "price": "40",
    "links": ""  
  },
  {
    "id": "alkjaslsdfkja",
    "roomNumber": "2",
    "price": "0",
    "links": ""  
  },
  {
    "id": "alsdlakjsdffkja",
    "roomNumber": "3",
    "price": "23",
    "links": ""  
  }
    
]