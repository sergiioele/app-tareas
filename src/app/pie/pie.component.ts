import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  @Input()
  totalTareas: number;

  @Input()
  tareasCompletadas: number;
  constructor() { }

  ngOnInit() {
  }

}
