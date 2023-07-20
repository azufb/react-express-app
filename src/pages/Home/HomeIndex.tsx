/** @jsxImportSource @emotion/react */

import Layout from '../../components/Layout';
import PageTitle from '../../components/PageTitle';
import { contentsWrapper, text } from './styles/homeIndex';

const HomeIndex = () => {
  return (
    <Layout>
      <PageTitle pageTitle='Home' />
      <div css={contentsWrapper}>
        <p css={text}>
          Express × GraphQL × Reactで実装してみた！
          <br />
          Prismaも使ってみた！
        </p>
      </div>
    </Layout>
  );
};

export default HomeIndex;
