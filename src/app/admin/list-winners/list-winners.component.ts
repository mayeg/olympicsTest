import {Component, Input, OnInit} from '@angular/core';
import {Winners} from '../../models/winners';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-winners.component.html',
  styleUrls: ['./list-winners.component.scss']
})
export class ListWinnersComponent implements OnInit {

  @Input()
  winners: Winners[];

  winnersPerPage: Winners[];
  page = 1;
  pageSize = 25;
  collectionSize;


  constructor() {
    this.collectionSize = 0;
  }

  ngOnInit(): void {
    if (this.winners) {
      this.collectionSize = this.winners.length;
      this.refreshWinners();
    }
  }

  refreshWinners(): void {
    this.winnersPerPage = this.winners
      .map((winner, i) => ({id: i + 1, ...winner}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
