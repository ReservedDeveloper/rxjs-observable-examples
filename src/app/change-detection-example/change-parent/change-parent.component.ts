import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { LogService } from '../../log.service';

@Component({
  selector: 'app-change-parent',
  templateUrl: './change-parent.component.html',
  styleUrls: ['./change-parent.component.scss']
})
export class ChangeParentComponent implements OnDestroy, OnInit {

  childIdSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  childIdStream: Observable<number> = this.childIdSubject.asObservable();

  @ViewChild('idPicker')
  idPicker: ElementRef;

  currentId: number;
  private idSubscription: Subscription;

  constructor(
    private logService: LogService
  ) { }

  ngOnInit() {
    this.idSubscription = this.childIdStream.subscribe((nextId: number) => this.currentId = nextId);
  }

  ngOnDestroy() {
    if (this.idSubscription) {
      this.idSubscription.unsubscribe();
    }
    this.logService.log('ChangeParentComponent destroyed');
  }

  changeChildId() {
    const updatedId = this.idPicker.nativeElement.value;
    this.childIdSubject.next(updatedId);
  }
}
