import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
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
      subtitle: 'Profile',
      other:[
        {icon: 'account_circle', items:'profile'},
        {icon: 'settings', items:'settings'},
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


    ],
  },

]


}
