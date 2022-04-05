import {makeAutoObservable} from 'mobx';
import {HomeShortened} from '../helpers/interfaces';

export class Home {
  homes: HomeShortened[] = [];
  count: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  addHomes(data: HomeShortened[]) {
    this.homes = data;
  }

  addCount(data: number) {
    this.count = data;
  }
}

export const homeStore = new Home();
