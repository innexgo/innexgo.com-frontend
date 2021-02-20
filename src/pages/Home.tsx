import React from 'react';
import { Card, CardDeck, Jumbotron, Container, Row, Button} from 'react-bootstrap';
/*import {Event, DirectionsRunOutlined, Schedule} from '@material-ui/icons';*/
import AOS from "aos";
import "aos/dist/aos.css";

import ExternalLayout from "../components/ExternalLayout";


import heroBg from "../img/homepage-bg.jpg";
import kids_and_books from "../img/kids_and_books.png";
import deal from "../img/deal.png";

interface Props { };
interface State {
  windowWidth: number;
  windowHeight: number;
};

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0,
    }
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    AOS.init({
      duration: 2000
    });
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);

  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

    this.setState({ windowWidth, windowHeight });
  };

  render() {
    const windowWidth = this.state.windowWidth;
    const tablet = windowWidth < 934;

    const jumboStyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.3)), url(${heroBg})`,
      height: "75vh",
      alignItems: "center",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      display: "flex",
      color: "#fff",
      justifyContent: "center"
    };

    const secondColumn = {
      float: tablet ? 'initial' as const : 'left' as const,
      width: tablet ? '100%' : '50%',
      margin: tablet ? 'auto' : '10px auto',
      padding: '10px',
    };

    return <>
      <ExternalLayout fixed={true} transparentTop={true}>
        <Jumbotron fluid style={jumboStyle}>
          <h1> Academics, Achievement, Attendance first. </h1>
        </Jumbotron>
        <section style={{ boxSizing: 'border-box' }}>
          <Container>
            <Row>
              <div>
                <h2 style={{ textAlign: 'center', margin: '25px auto', }} data-aos="fade-down" data-aos-duration="2000" data-aos-once="true">What is Innexgo?</h2>
                <div style={secondColumn} data-aos="fade-down" data-aos-duration="2000" data-aos-once="true">
                  <p>
                    Innexgo is at the forefront in providing educational software to tackle everyday problems for teachers and administrators. 
                  </p>
                  <p>
                  We began with Innexgo Hours, our flagship attendance online platform that allows teachers, administrators, and students to schedule appointments easily and effectively while maintaining on-demand attendance analytics and reports.
                  </p>
                  <p>
                  Innexgo is in the process of finalizing and quality-testing Innexgo Hours for production launch. Afterward, we plan to address other common issues for teachers, administrators, and students such as exam creation.
                  </p>
                </div>
                <div style={secondColumn} data-aos="fade-down" data-aos-duration="2000" data-aos-once="true">
                  <img src={kids_and_books} />
                  <p style={{ marginLeft: '50%', fontSize: '10px', marginTop: '0' }}>from pch.vector</p>
                </div>
              </div>
            </Row>
          </Container>
          <Container>
          <hr />
          <Row style={{margin: '50px auto'}}>
            <h2 data-aos="fade-down" data-aos-duration="2000" data-aos-once="true" style={{marginBottom: '25px'}}>Our Strategy</h2>
            <CardDeck>
              <Card>
                <Card.Body data-aos="fade-down" data-aos-duration="2000" data-aos-once="true">
                  <Card.Title>Data Orientation</Card.Title>
                  <Card.Text>
                    At the core, Innexgo drives solutions through data collection, storage, and display. 
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body data-aos="fade-down" data-aos-duration="2000" data-aos-once="true">
                  <Card.Title> Reports & Analytics </Card.Title>
                  <Card.Text>
                    We turn data into information. Academic and attendnace data are displayed through our analytics dashboards and can be downloaded on-demand.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body data-aos="fade-down" data-aos-duration="2000" data-aos-once="true">
                  <Card.Title>Community Involvement</Card.Title>
                  <Card.Text>
                    Innexgo understands the need to tailor our products to our consumers. We work proactively with teachers and administrators to address their concerns and improve our products.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </Row>
            <Row style={{marginBottom: '50px'}}>
              <div style={{
                float: tablet ? 'initial' : 'left',
                width: tablet ? '100%' : '65%',
                margin: tablet ? 'auto' : '10px auto',
              }} data-aos="fade-down" data-aos-duration="2000" data-aos-once="true">
                <h2 style={{ margin: '15px auto' }}>Pricing</h2>
                <p>
                  Innexgo prices varies depending on our products. For more information please contract Innexgo LLC at innexgo@gmail.com.
                  </p>
              </div>
              <div style={{
                float: tablet ? 'initial' : 'left',
                width: tablet ? '100%' : '35%',
                margin: tablet ? 'auto' : '10px auto',
              }}>
                <img src={deal} style={{ width: '100%', height: '100%' }} />
                <p style={{ textAlign: 'center', fontSize: '10px', marginTop: '3px' }}>from unitonvector</p>
              </div>
            </Row>
          </Container>
        </section>
      </ExternalLayout>
    </>
  }
}

export default Home;
