export class CipherModel {

  constructor(public name:string,
              public param:string,
              public hasBruteforce?:boolean,
              public hasSecretKey?:boolean,
              public isSpecialCaeser?:boolean,
              public isSpecialAffine?:boolean) {
  }
}
