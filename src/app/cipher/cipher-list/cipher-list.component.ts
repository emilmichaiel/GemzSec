import {Component, OnInit} from '@angular/core';
import {CipherAlgoSevice} from './cipher-algo/cipher-algo.sevice';
import {CipherModel} from './cipher-algo/cipher-model';

@Component({
  selector: 'app-cipher-list',
  templateUrl: './cipher-list.component.html',
  styleUrls: ['./cipher-list.component.css']
})
export class CipherListComponent implements OnInit {

  cipherAlgos: CipherModel[];

  constructor(private cipherAlgoService: CipherAlgoSevice) {
  }

  ngOnInit(): void {
    this.cipherAlgos = this.cipherAlgoService.getCiphers();
  }

}
