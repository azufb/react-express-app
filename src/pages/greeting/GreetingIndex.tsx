/** @jsxImportSource @emotion/react */

import PageTitle from '../../components/PageTitle';
import Layout from '../../components/Layout';
import GetGreeting from './components/GetGreeting';
import HelloWorld from './components/HelloWorld';
import RandomGreeting from './components/RandomGreeting';
import { contentsWrapper } from './styles/greetingIndex';

const GreetingIndex = () => {
  return (
    <Layout>
      <PageTitle pageTitle='Greeting' />
      <div css={contentsWrapper}>
        <GetGreeting />
        <HelloWorld />
        <RandomGreeting />
      </div>
    </Layout>
  );
};

export default GreetingIndex;
