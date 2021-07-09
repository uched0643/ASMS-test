import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  
  profiles = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
           {
            img: '../../assets/images.png',
            nom: 'Makany',
            prenoms: 'michel ange Junior',
            ville: 'Douala',
            pays: 'cameroun',
            age: 22,
            jour_de_naissance: 10,
            mois_de_naissance: 'Decembre',
            email: 'michelndjembe@gmail.com',
            icon1: 'place',
            icon2: 'email',
            icon3: 'cake',
          }
        ];
      }

      return [
        {
          img: '../../assets/images.png',
          nom: 'Makany',
          prenoms: 'michel ange Junior',
          ville: 'Douala',
          pays: 'cameroun',
          age: 22,
          jour_de_naissance: 10,
          mois_de_naissance: 'Decembre',
          email: 'michelndjembe@gmail.com',
          icon1: 'place',
          icon2: 'email',
          icon3: 'cake',
          line: 'hr'
        }

        // { cols: 4, rows: 2 },
      ];

    })
  )



  constructor(private breakpointObserver: BreakpointObserver) {}

}
