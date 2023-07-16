import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: 'http://localhost:8000/api',
  cache: new InMemoryCache(),
});

export default apolloClient;
