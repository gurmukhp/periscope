import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data: {new: number, has_comp: number, triaged: number, scheduled: number, accepted: number} =
    {new: 10, has_comp: 20, triaged: 30, scheduled: 40, accepted: 50 };

  constructor() { }

  ngOnInit() {
  }

}
