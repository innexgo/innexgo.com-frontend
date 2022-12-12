import React from 'react';
import { Container, Row, Card, } from 'react-bootstrap';
import { Icon, Person, BarChart, HandThumbsUp } from 'react-bootstrap-icons'
import { Section } from '@innexgo/common-react-components';

import ExternalLayout from "../components/ExternalLayout";

import heroBg from "../img/homepage-bg.jpg";

type MediaProps = {
  icon: Icon,
  title: string,
  children: React.ReactNode
}

function Media(props: MediaProps) {
  const Icon = props.icon;
  const iconStyle = {
    width: "3rem",
    height: "3rem",
    display: "inline-block",
    borderRadius: "0.5rem",
    color: "#fefefe",
    background: "#990000ff",
  };

  return <div className="d-flex justify-content-start my-3">
    <Icon style={iconStyle} className="p-2 me-2" />
    <div>
      <h5>{props.title}</h5>
      {props.children}
    </div>
  </div>
}

function Home() {
  const jumboStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.3)), url(${heroBg})`,
    height: "100vh",
    alignItems: "center",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    color: "#fff",
    justifyContent: "center"
  };

  const heroStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  const testimonialItemStyle = {
    display: "inline-block",
    padding: "0",
    position: "relative" as const,
    marginTop: "25px",
    marginBottom: "15px",
    width: "100%"
  };

  const testimonialItemOccupationStyle = {
    color: "#aaa",
    display: "block",
    position: "relative" as const,
  }

  const testimonalItemAuthorStyle = {
    display: "block",
    color: "#444",
    fontWeight: "bold" as const,
    marginTop: "20px",
  }
  return <ExternalLayout fixed={true} transparentTop={true}>
    <div style={jumboStyle} className="mb-5">
      <Container style={heroStyle}>
        <h1>Academics, Achievement, Attendance first.</h1>
      </Container>
    </div>
    <Container>
      <Section id="advantages" name="Advantages">
        <Media icon={HandThumbsUp} title="Easy to Use">
          <p>Increases teaching time by automating attendance in every classroom and decreasing teacher responsibilities.</p>
        </Media>
        <Media icon={Person} title="Secure Campus">
          <p> Ensures schoolwide safety by recording student entrances and exits and preventing chronic absenteeism in integrated classrooms. </p>
        </Media>
        <Media icon={BarChart} title="Detailed Reporting">
          <p> Analyzes attendance data to provide extensive administrator reports on in-session campus safety and attendance. </p>
        </Media>
      </Section>
      <hr />
      <Section id="strategy" name="Our Strategy">
        <Card className="mx-3 mb-3">
          <Card.Body>
            <Card.Title> Data Collection  </Card.Title>
            <Card.Text>
              The process begins with our RFID technology. All classrooms will have a scanner that captures scan-in/out data
              from students whenever an ID card is detected.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="mx-3 mb-3">
          <Card.Body>
            <Card.Title> Data Processing </Card.Title>
            <Card.Text>
              Data from the RFID-driven scanners are transmitted to the Innexgo database
              where this data is sorted into categorizations such as class periods, classrooms, and teachers.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="mx-3 mb-3">
          <Card.Body>
            <Card.Title>Data Analysis</Card.Title>
            <Card.Text>
              Innexgo displays the attendance data through our analytics dashboard where
              teachers and administrators can monitor student attendance records and access numerous charts and reports.
            </Card.Text>
          </Card.Body>
        </Card>
      </Section>
      <hr />
      <Section id="testimonials" name="What people say about us">
        <div style={testimonialItemStyle}>
          <p>&quot;Less time on trying to check who&apos;s there and more time for teaching.&quot;</p>
          <span style={testimonalItemAuthorStyle}>Channy Cornejo</span>
          <span style={testimonialItemOccupationStyle}>Math Department Chair</span>
        </div>
        <div style={testimonialItemStyle}>
          <p>&quot;It holds students accountable for their attendance habits.&quot;</p>
          <span style={testimonalItemAuthorStyle}>Carole Ng</span>
          <span style={testimonialItemOccupationStyle}>Computer Science Teacher</span>
        </div>
      </Section>
    </Container>
  </ExternalLayout>
}

export default Home;
