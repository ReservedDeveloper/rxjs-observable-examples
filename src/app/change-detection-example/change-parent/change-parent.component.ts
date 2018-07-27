import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-change-parent',
  templateUrl: './change-parent.component.html',
  styleUrls: ['./change-parent.component.scss']
})
export class ChangeParentComponent implements OnInit {

  childIdSubject: Subject<number> = new Subject();
  childId: Observable<number> = this.childIdSubject.asObservable();

  @ViewChild('idPicker')
  idPicker: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  changeChildId() {
    const updatedId = this.idPicker.nativeElement.value;
    this.childIdSubject.next(updatedId);
  }
}
