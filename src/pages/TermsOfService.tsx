import { Container } from 'react-bootstrap';

import ExternalLayout from '../components/ExternalLayout';
import TermsOfServiceComponent from '../components/TermsOfService';
import CookiePolicy from '../components/CookiePolicy';
import PrivacyPolicy from '../components/PrivacyPolicy';

const TermsOfService = () =>
  <ExternalLayout fixed={false} transparentTop={false}>
    <section id="terms_of_service">
      <Container>
        <TermsOfServiceComponent
          website="innexgo.com"
          email="innexgo@gmail.com"
          company="Innexgo LLC"
          description="managing student attendance"
        />
      </Container>
    </section>
    <br />
    <br />
    <br />
    <section id="cookie_policy">
      <Container>
        <CookiePolicy
          website="innexgo.com"
          company="Innexgo LLC"
        />
      </Container>
    </section>
    <br></br>
    <br></br>
    <br></br>
    <section id="privacy_policy">
      <Container>
        <PrivacyPolicy
          website="innexgo.com"
          email="innexgo@gmail.com"
          company="Innexgo LLC"
        />
      </Container>
    </section>
  </ExternalLayout>


export default TermsOfService;
