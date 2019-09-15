import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { JoblistService } from '../joblist.service';
import {NgxPaginationModule} from 'ngx-pagination';

class Data {

  _id: String;
  title: String;
  applylink: String;
  jd: String;
  companyname: String;
  location: String;
  experience: String;
  salary: String;
  type: String;
  skills: String;
  startdate: String;
  enddate: String;
  created: String;
  source: String;
  timestamp: Number;
  __v: Number;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit,AfterViewChecked {
 
  companyname:String;
  skills:String;
  location:String;
  items: Array<Data>;
  totalJobs: number

  constructor(private joblistService: JoblistService) {
  }

  ngOnInit() {

    this.joblistService.getJSON().subscribe(response => {
      this.items = response.data;
      this.totalJobs=this.items.length;
    });
  }

  ngAfterViewChecked(): void {
    // console.log(JSON.stringify(this.items));
   
  }

  

}
