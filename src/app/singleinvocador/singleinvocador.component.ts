import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { DataApiService } from '../services/data-api.service';

export interface Summoner {
  clasification_id: string;
  created_at: string;
  honor_level_id: string;
  id: string;
  name: string;
  percentage_victori: string;
  state: string;
  updated_at: string;
  user_id: string;
}

@Component({
  selector: 'app-singleinvocador',
  templateUrl: './singleinvocador.component.html',
  styleUrls: ['./singleinvocador.component.css']
})
export class SingleinvocadorComponent implements OnInit{
  /** Based on the screen size, switch from standard to one column per row */
  private nameInvocador: String;
  private honorInovcador: String;
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private route: ActivatedRoute, private dataApi: DataApiService) {
  }
  ngOnInit() {
    this.getInvocador();
  }
  getInvocador(): void {
    /*this.dataApi.getDataApiRiot(this.nameInvocador).subscribe((summoner) => {
      console.log(summoner);
    });*/
    this.dataApi.getSummonerName(this.route.snapshot.paramMap.get('invocador')).subscribe((summoner: Summoner)  => {
      this.getConverted(summoner.name,summoner.id);
    });
  }
  getConverted(name: String, honor: String): void {
    this.nameInvocador=name;
    this.honorInovcador=honor;
  }
}
