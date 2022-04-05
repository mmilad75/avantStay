import {makeAutoObservable} from 'mobx';
import {getSortedRegions} from '../helpers/functions';
import {Region as RegionInterface, SortedRegion} from '../helpers/interfaces';

export class Region {
  destination: RegionInterface | null = null;

  regions: SortedRegion[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addRegions(data: RegionInterface[]) {
    const sortedData = getSortedRegions(data);
    this.regions = sortedData;
  }

  addDestination(data: RegionInterface | null) {
    this.destination = data;
  }
}

export const regionStore = new Region();
