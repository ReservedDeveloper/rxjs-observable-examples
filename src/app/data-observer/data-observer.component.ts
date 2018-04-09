import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data-observer',
  templateUrl: './data-observer.component.html',
  styleUrls: ['./data-observer.component.css']
})
export class DataObserverComponent implements OnInit {

  data: string[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.dataObservable.subscribe( (d: string[]) => this.data = d);
  }
}
