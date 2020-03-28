import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { DataApiService } from '../services/data-api.service';
import { Summoner } from '../models/Summoner';


@Component({
  selector: 'app-singleinvocador',
  templateUrl: './singleinvocador.component.html',
  styleUrls: ['./singleinvocador.component.css']
})
export class SingleinvocadorComponent implements OnInit{
  /** Based on the screen size, switch from standard to one column per row */
  private invocador: Summoner = {
    clasification_id: null,
    clasification:null,
    honor:null,
    created_at:null,
    honor_level_id:null,
    id:null,
    name:null,
    percentage_victori:null,
    state:null,
    updated_at:null,
    user_id:null,
  };
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
    console.log(this.invocador);
    this.dataApi.getSummonerName(this.route.snapshot.paramMap.get('invocador')).subscribe((summoner: Summoner)  => {
      this.invocador = summoner;
      console.log(this.invocador);
    });
  }
}
