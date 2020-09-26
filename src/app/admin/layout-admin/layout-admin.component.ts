import {Component, OnInit} from '@angular/core';
import {OlympicService} from '../../services/olympic.service';
import {Winners} from '../../models/winners';
import {CategoryItem} from '../../models/categoryItem';

@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.scss']
})
export class LayoutAdminComponent implements OnInit {

  winners: Winners[];
  loading = true;
  summaryGold = 0;
  summarySilver = 0;
  summaryBronze = 0;
  categoryItems: CategoryItem[];

  constructor(private olympicService: OlympicService) {
    this.categoryItems = [
      {
        name: 'Oro',
        total: 0,
        icon: 'https://image.freepik.com/vector-gratis/medalla-oro-ganador-cintas-rojas-aisladas_53562-5227.jpg',
        description: 'Categoria de Primer Puesto'
      },
      {
        name: 'Plata',
        total: 0,
        icon: 'https://image.freepik.com/vector-gratis/medalla-plata-2do-lugar-plata_87720-2499.jpg',
        description: 'Categoria de Segundo Puesto'
      },
      {
        name: 'Bronce',
        total: 0,
        icon: 'https://png.pngtree.com/png-vector/20191027/ourlarge/pngtree-bronze-medal-vector-bronze-copper-3rd-place-ceremony-winner-honor-prize-png-image_1887551.jpg',
        description: 'Categoria de Tercer Puesto'
      }
    ];
  }

  ngOnInit(): void {
    this.olympicService.getList().subscribe(winners => {
        if (winners) {
          this.winners = winners;
          this.getSummary();
          this.loading = false;
        }
      }
    );
  }

  getSummary(): void {
    if (this.winners.length > 0) {
      this.winners.forEach(win => {
        this.summaryGold += win.gold;
        this.summarySilver += win.silver;
        this.summaryBronze += win.bronze;
      });
      this.categoryItems.forEach(categoryItem => {
        switch (categoryItem.name) {
          case 'Oro': {
            categoryItem.total = this.summaryGold;
            break;
          }
          case 'Plata': {
            categoryItem.total = this.summarySilver;
            break;
          }
          case 'Bronce': {
            categoryItem.total = this.summaryBronze;
            break;
          }
          default:
            break;
        }
      })
    }
  }

}
