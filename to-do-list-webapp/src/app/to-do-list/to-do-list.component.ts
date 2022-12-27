import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  mock_data = [
    {
      head: 'Work',
      description: 'sdfgjklmnghjknbvcfgjbnvcfghjbnvfggjhbn vcfghbn vcfg',
    },
    {
      head: 'Clock',
      description: 'sdfgjklmnghjknbvcfgjbnvcfghjbnvfggjhbn vcfghbn vcfg',
    },
    {
      head: 'School',
      description: 'sdfgjklmnghjknbvcfgjbnvcfghjbnvfggjhbn vcfghbn vcfg',
    },
    {
      head: 'Drive',
      description: 'sdfgjklmnghjknbvcfgjbnvcfghjbnvfggjhbn vcfghbn vcfg',
    },
    {
      head: 'Drive',
      description: 'sdfgjklmnghjknbvcfgjbnvcfghjbnvfggjhbn vcfghbn vcfg',
    },
    {
      head: 'Drive',
      description: 'sdfgjklmnghjknbvcfgjbnvcfghjbnvfggjhbn vcfghbn vcfg',
    },
    {
      head: 'Drive',
      description: 'sdfgjklmnghjknbvcfgjbnvcfghjbnvfggjhbn vcfghbn vcfg',
    },
    {
      head: 'Drive',
      description: 'sdfgjklmnghjknbvcfgjbnvcfghjbnvfggjhbn vcfghbn vcfg',
    },
    {
      head: 'Drive',
      description: 'sdfgjklmnghjknbvcfgjbnvcfghjbnvfggjhbn vcfghbn vcfg',
    },
    {
      head: 'Drive',
      description: 'sdfgjklmnghjknbvcfgjbnvcfghjbnvfggjhbn vcfghbn vcfg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
