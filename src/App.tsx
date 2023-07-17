import Router from './Router';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './apolloClient';

const App = () => {
  return (
    <div>
      <ApolloProvider client={apolloClient}>
        <Router />
      </ApolloProvider>
    </div>
  );
};

export default App;
