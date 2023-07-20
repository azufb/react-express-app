/** @jsxImportSource @emotion/react */

import { useQuery } from '@apollo/client';
import { GET_RANDOM_GREETING } from '../../../ts/gql';
import { randomGreetingWrapper } from '../styles/randomGreeting';

const RandomGreeting = () => {
  const { loading, data, refetch } = useQuery(GET_RANDOM_GREETING);

  const handleShuffle = (): void => {
    refetch();
  };

  return (
    <div css={randomGreetingWrapper}>
      <label>あいさつ：</label>
      <span>{loading ? 'Loading...' : data.greeting}</span>
      <div>
        <button onClick={handleShuffle}>ランダム！</button>
      </div>
    </div>
  );
};

export default RandomGreeting;
