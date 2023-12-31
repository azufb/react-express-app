/** @jsxImportSource @emotion/react */

import PageTitle from '../../components/PageTitle';
import Layout from '../../components/Layout';
import GetGreeting from './components/GetGreeting';
import RandomGreeting from './components/RandomGreeting';
import { contentsWrapper } from './styles/greetingIndex';

const GreetingIndex = () => {
  return (
    <Layout>
      <PageTitle pageTitle='Greeting' />
      <div css={contentsWrapper}>
        <GetGreeting />
        <RandomGreeting />
      </div>
    </Layout>
  );
};

export default GreetingIndex;
