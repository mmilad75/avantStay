import {Region, SortedRegion} from './interfaces';

export const getUniqueStates = (data: Region[]): string[] => {
  const result: string[] = [];
  data.forEach(item => {
    if (result.indexOf(item.stateName) === -1) {
      result.push(item.stateName);
    }
  });
  return result;
};

export const getSortedRegions = (regions: Region[]) => {
  const states = getUniqueStates(regions);
  const sortedData: SortedRegion[] = [];
  states.forEach(state => {
    const obj: SortedRegion = {
      data: [],
      state: '',
    };
    obj.state = state;
    regions.forEach(region => {
      if (region.stateName === state) {
        obj.data.push(region);
      }
    });
    sortedData.push(obj);
  });

  return sortedData;
};
