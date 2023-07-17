import { useQuery } from '@apollo/client';
import { GET_GREETING } from '../../ts/gql';

const GreetingIndex = () => {
  const { loading, error, data } = useQuery(GET_GREETING);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          <p>{data.hello}</p>
          <p>{data.goodbye}</p>
        </>
      )}
      {error && <p>Error : {error.message}</p>}
    </div>
  );
};

export default GreetingIndex;
