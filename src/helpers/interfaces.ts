import {ApolloError} from '@apollo/client';

export interface Region {
  name:string|string[],
  id: string,
  stateName: string
}

export interface Regions {
  regions: Region[] | undefined,
  loading: boolean,
  error: ApolloError | undefined
}

export interface SortedRegion {
  state: string|string[],
  data: Region[]
}

export interface HomePhoto {
  listOrder: number,
  url: string
}

export interface HomeShortened {
  id: string
  title:string
  bedsCount: number
  bathroomsCount:number
  roomsCount: number
  regionName: string
  hasPool:boolean
  cityName: string
  stateCode: string
  maxOccupancy: number
  photos: HomePhoto[]
}

export interface Homes {
  homes: {
    count: number,
    results: HomeShortened[]
  }
}
