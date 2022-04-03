import {ApolloClient, InMemoryCache} from '@apollo/client';

export const BASE_URL = 'https://fake-api.avantstay.dev/graphql';
export const HOMES_PER_PAGE = 20;

export const apolloClient = new ApolloClient({
  uri: BASE_URL,
  cache: new InMemoryCache(),
});
