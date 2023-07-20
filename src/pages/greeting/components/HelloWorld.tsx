/** @jsxImportSource @emotion/react */

import { useQuery } from '@apollo/client';
import { GET_HELLO_WORLD } from '../../../ts/gql';
import { helloWorldWrapper } from '../styles/helloWorld';

const HelloWorld = () => {
  const { loading, data } = useQuery(GET_HELLO_WORLD);

  return (
    <div css={helloWorldWrapper}>
      <p>{loading ? 'Loading...' : data.helloWorld}</p>
    </div>
  );
};

export default HelloWorld;
