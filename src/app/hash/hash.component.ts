import {Component, OnInit} from '@angular/core';
import {Hash} from './hash.model';
import {TextFrequency} from '../text/text-frequency.model';

@Component({
  selector: 'app-hash',
  templateUrl: './hash.component.html',
  styleUrls: ['./hash.component.css']
})
export class HashComponent implements OnInit {

  plainText: string = '';
  hashes: Hash[] = [
    new Hash('md2'),
    new Hash('md4'),
    new Hash('md5'),
    new Hash('sha1'),
    new Hash('sha224'),
    new Hash('sha256'),
    new Hash('sha384'),
    new Hash('sha512'),
    new Hash('sha512_224'),
    new Hash('sha512_256'),
    new Hash('sha3_224'),
    new Hash('sha3_256'),
    new Hash('sha3_384'),
    new Hash('sha3_512'),
    new Hash('keccak224'),
    new Hash('keccak256'),
    new Hash('keccak384'),
    new Hash('keccak512'),
    new Hash('shake128', 256),
    new Hash('shake256', 512),
  ];
  textFreq: TextFrequency[] = [
    new TextFrequency('A', 5),
    new TextFrequency('B', 10),
    new TextFrequency('G', 50),
    new TextFrequency('E', 2),
    new TextFrequency('Y', 4),
    new TextFrequency('S', 20),
    new TextFrequency('N', 56),
    new TextFrequency('P', 1),
    new TextFrequency('O', 11),
    new TextFrequency('I', 35)
  ];

  constructor() {
  }

  ngOnInit(): void {
    this.hashes.sort();
  }

  clearText() {
    this.plainText = '';
  }

}
