import {Injectable} from '@angular/core';
import {CipherModel} from './cipher-model';

@Injectable({
  providedIn: 'root'
})
export class CipherAlgoSevice {

  cipherAlgo: CipherModel[] = [
    new CipherModel('AES', 'aes', false, true, false, false),
    new CipherModel('Affine', 'affine', true, false, false, true),
    new CipherModel('Caeser', 'caser', false, false, true, false),
    new CipherModel('DES', 'des', false, true, false, false),
    new CipherModel('Rabbit', 'rabbit', false, true, false, false),
    new CipherModel('RC4', 'rc4', false, true, false, false),
    new CipherModel('Substitution', 'substitution', false, true, false, false),
    new CipherModel('Triple DES', '3des', false, true, false, false),
    new CipherModel('Vigenere', 'vigenere', false, true, false, false)
  ];

  getCiphers() {
    return this.cipherAlgo.slice();
  }

  getCipherByAlgo(algo: string) {
    return this.cipherAlgo.find(searchAlgo => searchAlgo.param.toLowerCase() === algo.toLowerCase());
  }
}
