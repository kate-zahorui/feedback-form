import { Container, Form } from '../';
import map from '../../images/Map1.png';

const Main = () => {
  return (
    <main>
      <Container>
        <section>
          <h1>Reach out to us!</h1>
          <Form />
        </section>
        <img src={map} alt="Map" />
      </Container>
    </main>
  );
};

export default Main;
