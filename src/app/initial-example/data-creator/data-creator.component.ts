import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data-creator',
  templateUrl: './data-creator.component.html',
  styleUrls: ['./data-creator.component.scss']
})
export class DataCreatorComponent implements OnInit {

  newEntry: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  addEntry(data: string) {
    this.dataService.addEntry(data);
  }
}
