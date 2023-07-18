/** @jsxImportSource @emotion/react */

import Router from './Router';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './apolloClient';
import { appTitle } from './styles/app';

const App = () => {
  return (
    <div>
      <ApolloProvider client={apolloClient}>
        <h1 css={appTitle}>GraphQLに挑戦！</h1>
        <Router />
      </ApolloProvider>
    </div>
  );
};

export default App;
