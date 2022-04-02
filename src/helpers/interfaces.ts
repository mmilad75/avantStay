import {ApolloError} from '@apollo/client';

export interface Region {
  name:string,
  id: string,
  stateName: string
}

export interface Regions {
  regions: Region[] | undefined,
  loading: boolean,
  error: ApolloError | undefined
}

export interface SortedRegion {
  state: string,
  data: Region[]
}
