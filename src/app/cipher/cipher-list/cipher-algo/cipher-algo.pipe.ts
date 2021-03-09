import {Pipe, PipeTransform} from '@angular/core';
import * as crypto from 'crypto-js';
import {Affine, Substitution, Vigenere} from 'CipherJS';

@Pipe({
  name: 'cipherAlgo'
})
export class CipherAlgoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value.length > 0) {
      switch (args[0]) {
        case 'AES':
          if (args[2]) {
            return crypto.AES.encrypt(value, args[1]).toString();
          }
          return crypto.AES.decrypt(value, args[1]).toString(crypto.enc.Utf8);
          break;
        case 'Affine':
          if (args[1]) {
            return Affine.encrypt(value, args[2], args[3]);
          }
          return Affine.decrypt(value, args[2], args[3]);
          break;
        case 'Caeser':
          return this.caeserCipher(value, args[1]);
          break;
        case 'DES':
          if (args[2]) {
            return crypto.DES.encrypt(value, args[1]).toString();
          }
          return crypto.DES.decrypt(value, args[1]).toString(crypto.enc.Utf8);
          break;
        case 'Rabbit':
          if (args[2]) {
            return crypto.Rabbit.encrypt(value, args[1]).toString();
          }
          return crypto.Rabbit.decrypt(value, args[1]).toString(crypto.enc.Utf8);
          break;
        case 'RC4':
          if (args[2]) {
            return crypto.RC4.encrypt(value, args[1]).toString();
          }
          return crypto.RC4.decrypt(value, args[1]).toString(crypto.enc.Utf8);
          break;
        case 'Substitution':
          if (args[2]) {
            return Substitution.encrypt(value, args[1]);
          }
          return Substitution.decrypt(value, args[1]);
          break;
        case 'Triple DES':
          if (args[2]) {
            return crypto.TripleDES.encrypt(value, args[1]).toString();
          }
          return crypto.TripleDES.decrypt(value, args[1]).toString(crypto.enc.Utf8);
          break;
        case 'Vigenere':
          if (args[2]) {
            return Vigenere.encrypt(value, args[1]);
          }
          return Vigenere.decrypt(value, args[1]);
          break;
      }
      // if (args[0] === 'AES') {
      //   if (args[2]) {
      //     return crypto.AES.encrypt(value, args[1]).toString();
      //   }
      //   return crypto.AES.decrypt(value, args[1]).toString(crypto.enc.Utf8);
      // } else if (args[0] === 'Affine') {
      //   if (args[1]) {
      //     return Affine.encrypt(value, args[2], args[3]);
      //   }
      //   return Affine.decrypt(value, args[2], args[3]);
      // } else if (args[0] === 'Caeser') {
      //   return this.caeserCipher(value, args[1]);
      // } else if (args[0] === 'DES') {
      //   if (args[2]) {
      //     return crypto.DES.encrypt(value, args[1]).toString();
      //   }
      //   return crypto.DES.decrypt(value, args[1]).toString(crypto.enc.Utf8);
      // } else if (args[0] === 'Rabbit') {
      //   if (args[2]) {
      //     return crypto.Rabbit.encrypt(value, args[1]).toString();
      //   }
      //   return crypto.Rabbit.decrypt(value, args[1]).toString(crypto.enc.Utf8);
      // } else if (args[0] === 'RC4') {
      //   if (args[2]) {
      //     return crypto.RC4.encrypt(value, args[1]).toString();
      //   }
      //   return crypto.RC4.decrypt(value, args[1]).toString(crypto.enc.Utf8);
      // } else if (args[0] === 'Substitution') {
      //   if (args[2]) {
      //     return Substitution.encrypt(value, args[1]);
      //   }
      //   return Substitution.decrypt(value, args[1]);
      // } else if (args[0] === 'Triple DES') {
      //   if (args[2]) {
      //     return crypto.TripleDES.encrypt(value, args[1]).toString();
      //   }
      //   return crypto.TripleDES.decrypt(value, args[1]).toString(crypto.enc.Utf8);
      // } else if (args[0] === 'Vigenere') {
      //   if (args[2]) {
      //     return Vigenere.encrypt(value, args[1]);
      //   }
      //   return Vigenere.decrypt(value, args[1]);
      // }if (args[0] === 'AES') {
      //   if (args[2]) {
      //     return crypto.AES.encrypt(value, args[1]).toString();
      //   }
      //   return crypto.AES.decrypt(value, args[1]).toString(crypto.enc.Utf8);
      // } else if (args[0] === 'Affine') {
      //   if (args[1]) {
      //     return Affine.encrypt(value, args[2], args[3]);
      //   }
      //   return Affine.decrypt(value, args[2], args[3]);
      // } else if (args[0] === 'Caeser') {
      //   return this.caeserCipher(value, args[1]);
      // } else if (args[0] === 'DES') {
      //   if (args[2]) {
      //     return crypto.DES.encrypt(value, args[1]).toString();
      //   }
      //   return crypto.DES.decrypt(value, args[1]).toString(crypto.enc.Utf8);
      // } else if (args[0] === 'Rabbit') {
      //   if (args[2]) {
      //     return crypto.Rabbit.encrypt(value, args[1]).toString();
      //   }
      //   return crypto.Rabbit.decrypt(value, args[1]).toString(crypto.enc.Utf8);
      // } else if (args[0] === 'RC4') {
      //   if (args[2]) {
      //     return crypto.RC4.encrypt(value, args[1]).toString();
      //   }
      //   return crypto.RC4.decrypt(value, args[1]).toString(crypto.enc.Utf8);
      // } else if (args[0] === 'Substitution') {
      //   if (args[2]) {
      //     return Substitution.encrypt(value, args[1]);
      //   }
      //   return Substitution.decrypt(value, args[1]);
      // } else if (args[0] === 'Triple DES') {
      //   if (args[2]) {
      //     return crypto.TripleDES.encrypt(value, args[1]).toString();
      //   }
      //   return crypto.TripleDES.decrypt(value, args[1]).toString(crypto.enc.Utf8);
      // } else if (args[0] === 'Vigenere') {
      //   if (args[2]) {
      //     return Vigenere.encrypt(value, args[1]);
      //   }
      //   return Vigenere.decrypt(value, args[1]);
      // }
    }
  }

  caeserCipher(value: string, offset: number) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const fullAlphabet = alphabet + alphabet + alphabet;
    offset = (offset % alphabet.length);
    let cipherText = '';

    for (let i = 0; i < value.length; i++) {
      let letter = value[i];
      const upper = (letter == letter.toUpperCase());
      letter = letter.toLowerCase();

      let index = alphabet.indexOf(letter);
      if (index == -1) {
        cipherText += letter;
      } else {
        index = ((index + offset) + alphabet.length);
        let nextLetter = fullAlphabet[index];
        if (upper) {
          nextLetter = nextLetter.toUpperCase();
        }
        cipherText += nextLetter;
      }
    }
    return cipherText;
  }

}
