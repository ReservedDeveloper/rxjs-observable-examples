import { Component, OnInit } from '@angular/core';

/**
 * Takes a primitive input and pushes it to a local Subject.
 *
 * Subscribes to new values from that Subject and maps those to
 * a request to fetch the corresponding record
 *
 * Does *not* require re-initializing Subject
 */
@Component({
  selector: 'app-subject-backed-child',
  templateUrl: './subject-backed-child.component.html',
  styleUrls: ['./subject-backed-child.component.scss']
})
export class SubjectBackedChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
