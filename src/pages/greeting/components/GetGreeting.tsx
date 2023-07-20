/** @jsxImportSource @emotion/react */

import { useQuery } from '@apollo/client';
import { GET_GREETING } from '../../../ts/gql';
import { useState } from 'react';
import { greetingWrapper } from '../styles/getGreeting';

const GetGreeting = () => {
  const [name, setName] = useState<string>('');
  const { loading, data } = useQuery(GET_GREETING, {
    variables: { name },
  });

  const handleChangeName = (inputValue: string): void => {
    setName(inputValue);
  };

  return (
    <div css={greetingWrapper}>
      <div>
        <label htmlFor='inputName'>任意のお名前：</label>
        <input
          id='inputName'
          type='text'
          placeholder='任意のお名前を入力'
          onChange={(e) => handleChangeName(e.target.value)}
        />
      </div>
      <div>
        <label>hello：</label>
        <span>{loading ? 'Loading...' : data.hello}</span>
      </div>
      <div>
        <label>goodbye：</label>
        <span>{loading ? 'Loading...' : data.goodbye}</span>
      </div>
    </div>
  );
};

export default GetGreeting;
