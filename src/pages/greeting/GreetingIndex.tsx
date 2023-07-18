import { useQuery } from '@apollo/client';
import { GET_GREETING } from '../../ts/gql';
import PageTitle from '../../components/PageTitle';
import Layout from '../../components/Layout';

const GreetingIndex = () => {
  const { loading, error, data } = useQuery(GET_GREETING);

  return (
    <Layout>
      <PageTitle pageTitle='Greeting' />
      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          <p>{data.hello}</p>
          <p>{data.goodbye}</p>
        </>
      )}
      {error && <p>Error : {error.message}</p>}
    </Layout>
  );
};

export default GreetingIndex;
