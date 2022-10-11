import { useSelector } from 'react-redux';

import { Container, Form } from '../';
import map from '../../images/Map1.png';

const Main = () => {
  const { isLoading, error } = useSelector(state => state.feedback);

  return (
    <main>
      <Container>
        <section>
          <h1>Reach out to us!</h1>
          <Form />
          {isLoading && <p>Loading...</p>}
          {error && <p>Error. {error.message}</p>}
        </section>
        <img src={map} alt="Map" />
      </Container>
    </main>
  );
};

export default Main;
