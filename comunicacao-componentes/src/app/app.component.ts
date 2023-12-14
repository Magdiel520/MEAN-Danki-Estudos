import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public addValue: number = 0;

  constructor(){

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'comunicacao-componentes';
}
