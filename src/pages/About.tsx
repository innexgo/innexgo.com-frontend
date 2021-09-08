import React from 'react';

import ExternalLayout from '../components/ExternalLayout';

import { Container, Row, Col } from 'react-bootstrap';

import GovindPimpale from '../img/team/GovindPimpale.jpg';
import RichardLe from '../img/team/RichardLe.jpg';
import GaneshPimpale from '../img/team/GaneshPimpale.jpg';
import MarekPinto from '../img/team/MarekPinto.jpg';
import HenryChen from '../img/team/HenryChen.jpg';
import EmilyPark from '../img/team/EmilyPark.jpg';
import JoshuaSah from '../img/team/JoshuaSah.jpg';
import JordanNguyen from '../img/team/JordanNguyen.jpg';
import JasonLy from '../img/team/JasonLy.jpg';
import MaheswariBajji from '../img/team/MaheswariBajji.jpg';
import NavneethSuresh from '../img/team/NavneethSuresh.jpg';

type TeamMemberProps = {
  name: string,
  role: string,
  img: string,
};

function TeamMember(props: TeamMemberProps) {
  return (
    <Col xs style={{ textAlign: "center" as const }}>
      <img style={{ borderRadius: '50%' }} src={props.img} alt='' />
      <h5>{props.name}</h5>
      <p>{props.role}</p>
    </Col>
  )
}

function About() {
  return (
    <ExternalLayout fixed={false} transparentTop={false}>
      <section>
        <Container>
          <div className="py-5">
            <h2>About</h2>
            <p>
              Innexgo started as a project in October 2018. Four students entered MESA&rsquo;s National Engineering
              Design Challenge (NEDC) with the idea of creating a system to monitor student movements in school
              to improve the administration&rsquo;s attendance tracking abilities. The system will improve accountability
              of students being in the right classes at the right time and will benefit the school by ensuring
              attendance-based funding is maintained satisfactorily. As our team progressed through competitions,
              many teachers gave positive feedback regarding our system, and quite a few teachers commented that
              they would love to have the system implemented in their school, including our very own teachers here
              at Santa Teresa. Thus, Innexgo LLC was born.
            </p>
            <p>
              Innexgo LLC now strives to help schools and school districts tackle attendance inconsistencies. We are
              committed to collaborating with community and education leaders to optimize our attendance system
              to the localized needs of all clients. As we move forward, Innexgo LLC aims to bring our technology to
              other academic institutions across many communities in the United States.
            </p>
            <p>
              Furthermore, Innexgo LLC is expanding operations to assist schools and school districts beyond attendance.
              Currently, we are innovating our new platform for exam creation, Innexgo Exams, on top of continuing to improve
              our flagship attendance services, Innexgo Hours. 
            </p>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <TeamMember img={GovindPimpale} name='Govind Pimpale' role='Founding Technology Officer' />
            <TeamMember img={RichardLe} name='Richard Le' role='Founding Financial Officer' />
            <TeamMember img={GaneshPimpale} name='Ganesh Pimpale' role='Founding Engineer' />
          </Row>
          <Row>
            <TeamMember img={MarekPinto} name='Marek Pinto' role='Founding Engineer' />
            <TeamMember img={HenryChen} name='Henry Chen' role='Software Developer' />
            <TeamMember img={EmilyPark} name='Emily Park' role='Hardware Manufacturing' />
          </Row>
          <Row>
            <TeamMember img={MaheswariBajji} name='Maheswari Bajji' role='Software Developer' />
            <TeamMember img={NavneethSuresh} name='Navneeth Suresh' role='UI/UX Developer' />
            <TeamMember img={JasonLy} name='Jason Ly' role='Database Developer' />
          </Row>
        </Container>
      </section>
      <br />
      <br />
    </ExternalLayout >
  )
}

export default About;
