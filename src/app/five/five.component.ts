import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.scss'],
})
export class FiveComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  rightSection: any = [
    {
      heading: `right section`,
      upperSection: [
        {
          heading: `345`,
          sub: `enrolment`,
          bg: 'rgba(26, 124, 65, 0.104)',
          color: 'rgba(26, 124, 65)',
        },
        {
          heading: `345`,
          sub: `register`,
          bg: 'rgba(26, 124, 124, 0.104)',
          color: 'rgb(26, 124, 124)',
        },
      ],
      lowerSection: [
        {
          heading: `33`,
          bg: 'rgba(123, 231, 231, 0.204)',
          color: 'rgb(123, 231, 231)',
          sub: `comment`,
        },
        {
          heading: `05`,
          bg: 'rgba(35, 76, 153, 0.105)',
          color: 'rgb(35, 76, 153)',
          sub: `news`,
        },
        {
          heading: `45`,
          bg: 'rgba(83, 233, 57, 0.105)',
          color: 'rgb(83, 233, 57)',
          sub: `other`,
        },
        {
          heading: `35`,
          bg: 'rgba(233, 57, 57, 0.105)',
          color: 'rgb(233, 57, 57)',
          sub: `fix`,
        },
      ],
    },
  ];
}
