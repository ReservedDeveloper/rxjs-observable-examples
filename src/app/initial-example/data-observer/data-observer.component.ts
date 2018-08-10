import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data-observer',
  templateUrl: './data-observer.component.html',
  styleUrls: ['./data-observer.component.scss']
})
export class DataObserverComponent implements OnInit {

  data: Observable<string[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.data = this.dataService.dataObservable;
  }
}
