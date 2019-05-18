import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-singleinvocador',
  templateUrl: './singleinvocador.component.html',
  styleUrls: ['./singleinvocador.component.css']
})
export class SingleinvocadorComponent implements OnInit{
  /** Based on the screen size, switch from standard to one column per row */
  private nameInvocador: String;
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

  constructor(private breakpointObserver: BreakpointObserver, private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.getInvocador();
  }
  getInvocador(): void {
    this.nameInvocador=this.route.snapshot.paramMap.get('invocador');
    const invocador = +this.route.snapshot.paramMap.get('invocador');
    console.log(this.route.snapshot.paramMap.get('invocador'));
  }
}
