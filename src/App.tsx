import React, { useEffect, useState } from 'react';
import './App.css';
import apolloClient from './apolloClient';
import { gql } from '@apollo/client';

const App = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    apolloClient
      .query({
        query: gql`
          query GetHello {
            hello
          }
        `,
      })
      .then((result) => {
        setMessage(result.data.hello);
      });
  });

  return (
    <div className='App'>
      <header className='App-header'>
        <p>{message}</p>
      </header>
    </div>
  );
};

export default App;
