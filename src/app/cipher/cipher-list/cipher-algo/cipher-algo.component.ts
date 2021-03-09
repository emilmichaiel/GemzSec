import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {CipherAlgoSevice} from './cipher-algo.sevice';
import {CipherModel} from './cipher-model';

@Component({
  selector: 'app-cipher-algo',
  templateUrl: './cipher-algo.component.html',
  styleUrls: ['./cipher-algo.component.css']
})
export class CipherAlgoComponent implements OnInit {

  cipherAlgo: CipherModel;
  isEncrypt: boolean = true;
  isShowTextAnalysis: boolean = false;
  isBruteForce: boolean = false;
  plainText: string = '';
  secretKey: string = '';
  aCoefficient: number = 5;
  bCoefficient: number = 23;

  constructor(private activatedRoute: ActivatedRoute,
              private cipherAlgoService: CipherAlgoSevice) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.cipherAlgo = this.cipherAlgoService.getCipherByAlgo(params['algo']);
        this.clearText();
        this.isEncrypt = true;
      }
    );
  }

  clearText() {
    this.plainText = '';
    this.secretKey = '';
    this.isShowTextAnalysis = false;
    this.isBruteForce = false;
    this.aCoefficient = 5;
    this.bCoefficient = 23;
  }

  switchMode() {
    this.isEncrypt = !this.isEncrypt;
    this.clearText();
  }

  switchTextAnalysis() {
    this.isShowTextAnalysis = !this.isShowTextAnalysis;
  }

  bruteforce() {
    this.isBruteForce = !this.isBruteForce;
  }
}
