import { Component, OnInit } from '@angular/core';
import dados from '../../dados/dados.json';

@Component({
  selector: 'app-with-acess',
  templateUrl: './with-acess.component.html',
  styleUrls: ['./with-acess.component.css'],
})
export class WithAcessComponent implements OnInit {
  constructor() {}
  dado = dados.Usuarios;

  ngOnInit() {
    console.table(this.dado);
  }
}
