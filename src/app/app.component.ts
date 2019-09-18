import { Component, OnInit } from '@angular/core';
import { JoblistService } from './joblist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'jobportal';

  constructor(){
  }

  ngOnInit(){}
   
}
