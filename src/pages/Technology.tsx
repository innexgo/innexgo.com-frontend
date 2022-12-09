import React from 'react';

import ExternalLayout from '../components/ExternalLayout';
import { Container, Row, Col } from 'react-bootstrap';

function Technology() {
  return (
    <ExternalLayout fixed={false} transparentTop={false}>
      <section>
        <Container>
          <div className="py-5">
            <h2>About</h2>
            <p>
              test
            </p>
          </div>
        </Container>
      </section>
    </ExternalLayout>
  )
}

export default Technology;
