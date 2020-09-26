import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {CategoryItem} from '../../models/categoryItem';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class CategoryComponent implements OnInit {

  @Input()
  categoryItem: CategoryItem;

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
  }

  goInfo(content): void {
    this.modalService.open(content, {centered: true});
  }

}
