import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss'],
})
export class DashComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          {
            title: 'card 1',
            cols: 1,
            rows: 1,
            color: 'blue',
            task: 'Task',
            heading: 27,
            titleDescription: `Completed: ${5}`,
          },
          {
            title: 'card 2',
            cols: 1,
            rows: 1,
            color: 'orange',
            task: 'Task',
            heading: 27,
            titleDescription: `Completed: ${13}`,
          },
          {
            title: 'card 3',
            cols: 1,
            rows: 1,
            color: 'green',
            task: 'Task',
            heading: 27,
            titleDescription: `Completed: ${5}`,
          },
          {
            title: 'card 4',
            cols: 1,
            rows: 1,
            color: 'red',
            task: 'Task',
            heading: 27,
            titleDescription: `Completed: ${6}`,
          },
          { title: 'card 5', cols: 1, rows: 2 },

          { title: 'card 6', cols: 2, rows: 2 },
          { title: 'card 7', cols: 2, rows: 2 },

          // { cols: 4, rows: 2 },
        ];
      }

      return [
        {
          title: 'summary',
          cols: 1,
          rows: 1,
          color: 'blue',
          task: 'Task',
          heading: 27,
          titleDescription: `Completed: ${13}`,
        },
        {
          title: 'overdue',
          cols: 1,
          rows: 1,
          color: 'green',
          task: 'Task',
          heading: 39,
          titleDescription: `From today: ${9}`,
        },
        {
          title: 'features',
          cols: 1,
          rows: 1,
          color: 'red',
          task: 'Task',
          heading: 22,
          titleDescription: `From Yesterday: ${5}`,
        },
        {
          title: 'issues',
          cols: 1,
          rows: 1,
          color: 'orange',
          task: 'Task',
          heading: 40,
          titleDescription: `Implemented: ${16}`,
        },
        { title: 'card 5', cols: 4, rows: 2 },
        { title: 'card 6', cols: 2, rows: 2 },
        { title: 'card 7', cols: 2, rows: 2 },
        // { cols: 2, rows: 3 },
        // { title: 'Card 3', cols: 2, rows: 3 },
        // { title: 'Card 3', cols: 2, rows: 3 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
