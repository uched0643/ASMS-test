import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  panelOpenState:boolean = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
  menuItems:any = [
    {
      title: 'dashboard',
      subtitle: 'recent analytics',
      other:[
      {icon: 'business_center', items:'Students',},
      {icon: 'cast_for_education', items:'Instructors'}
      ],
    },
    {
      title: 'applications',
      subtitle: 'current events',
      other:[
      {icon: 'school', items:'academy',},
      {icon: 'today', items:'calendar'},
      {icon: 'forum', items:'chat',},
      {icon: 'call', items:'contact'},
  
      ],
    },
]

pages:any = [
  {
    title: 'features and more',
    subtitle: 'activities, notes, others....',
    other:[
    {icon: 'notes', items:'Activities'},
    {icon: 'email', items:'mailbox'},
    {icon: 'text_snippet', items:'notes'},
    {icon: 'sensor_window', items:'scrumboard'},
    {icon: 'task_alt', items:'tasks'},
    {icon: 'settings', items:'settings'},
    {icon: 'account_circle', items:'profile'}
    ],
  },

]


}
