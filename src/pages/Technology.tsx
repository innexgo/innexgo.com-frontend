import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ExternalLayout from '../components/ExternalLayout';

import CaseCad from '../img/case_cad.png';
import PcbCad from '../img/pcb_cad.png';
import PCBBackIrl from '../img/pcb_back_irl.jpg';
import PCBFrontIrl from '../img/pcb_front_irl.jpg';
import PartialAssemblyFrontIrl from '../img/partialassembly_front_irl.jpg';

function Technology() {
  return (
    <ExternalLayout fixed={false} transparentTop={false}>
      <Container>
        <section>
          <div className="py-5">
            <h2>Innexgo System</h2>
            <p>
              Part of what makes our system unique is our custom hardware and IOT software.
              We designed it to be easy to use, cost effective, and reliable.
            </p>
            <figure className="text-center my-3">
              <img
                src={PartialAssemblyFrontIrl}
                style={{ width: "20rem" }}
                className="border border-dark mx-auto d-block"
                alt="Partially Assembled Scanner"
              />
              <figcaption>Partially assembled scanner showing custom PCB.</figcaption>
              <figcaption><small>Source: Own Work</small></figcaption>
            </figure>
            <h5>Scanner Requirements</h5>
            The scanner shown above has several jobs to play in order to be useful. It must:
            <ol>
              <li>Scan students' cards
                <ul>
                  <li>
                    Students need a quick way to scan in and out of the classroom.
                  </li>
                </ul>
              </li>
              <li>Provide immediate scan feedback
                <ul>
                  <li>
                    Students need a simple and intuitive way to know when their card successfully scans, or when an error occurs.
                    We need to provide both simultaneous auditory and visual feedback to students.
                    This lets both hearing and vision impaired students use the system without confusion.
                  </li>
                  <li>
                    We should also make it easy to tell if you're signing in or out of the classroom at the time of the scan.
                    This makes it easier to know what's going on when you tap your card.
                  </li>
                </ul>
              </li>
              <li>Provide diagnostic information
                <ul>
                  <li>
                    If cards keep failing to scan, it may be an issue with the WIFI connection of the device.
                    Alternatively, it could be a hardware failure.
                    In order to easily tell the difference, we need a simple way to tell what kind of an error has occured.
                  </li>
                </ul>
              </li>
              <li>Be upgradeable
                <ul>
                  <li>
                    We need a way to upgrade the firmware if we release a new incompatible server protocol or discover a bug in our original firmware.
                  </li>
                </ul>
              </li>
            </ol>
            <p>
              Simultaneously fulfilling all of these tasks while keeping complexity reasonably low is a challenge.
              But in general, designing an IOT devices like these is a process filled with making tradeoffs.
              When designing, you'll have to choose between efficiency, reliability, cost, and a whole host of other important attributes.
            </p>
            <p>
              Here are some of the key design areas where we made that we belive make the Innexgo system more cost effective, while still keeping it reliable and user friendly.
            </p>
            <ul>
              <li>
                <h6>PCB Design</h6>
              </li>
              <li>
                <h6>ESP32 Microcontroller</h6>
              </li>
              <li>
                <h6>3D Printed Case</h6>
              </li>
            </ul>
            <p>
              We'll go through each of these in more depth below.
            </p>
            <h4>PCB design</h4>
            <p>
              Note: our PCB is open source!
              Check it out <a href="https://github.com/innexgo/PCB">on our github</a>.
            </p>
            <p>
              Here's what the front and back of our PCB looks like:
            </p>
            <figure className="text-center my-3">
              <div className='d-flex justify-between my-3'>
                <img
                  src={PCBFrontIrl}
                  style={{ width: "20rem" }}
                  className="border border-dark mx-auto d-block"
                  alt="Front of the scanner PCB"
                />
                <img
                  src={PCBBackIrl}
                  style={{ width: "20rem" }}
                  className="border border-dark mx-auto d-block"
                  alt="Back of the scanner PCB"
                />
              </div>
              <figcaption>Front and back of the scanner PCB</figcaption>
              <figcaption><small>Source: Own Work</small></figcaption>
            </figure>
            <p>
              We use RFID technology to accomplish requirement 1, the ability to quickly scan in students.
              Many student ID cards have RFID chips already built in, and if not, there are cheap stickers you can attach to the cards containing the RFID chip.
            </p>
            <p>
              RFID is a passively powered technology.
              That is, the RFID chips on the student's cards don't use any power until they come close to the scanner.
              The coil you see on the top of the PCB acts like an antenna to wirelessly transfer power into the chip.
              That same coil is also responsible for reading back the response from the RFID chip once it has been powered.
            </p>
            <p>
              For our device, we integrated the RFID coil into the same PCB as everything else.
              This makes our device simpler to assemble and less likely to break. 
              The coil is driven by the MFRC522 chip, which is visible on the center-left of the PCB, betwen the two rows of holes.
            </p>
            <p>
              On the right side of the chip we have the two diagnostic lights 
            </p>


            <figure className="text-center my-3">
              <img
                src={CaseCad}
                style={{ width: "30rem" }}
                className="border border-dark mx-auto d-block"
                alt="Partially Assembled Scanner"
              />
              <figcaption>Partially assembled scanner showing custom PCB.</figcaption>
              <figcaption><small>Source: Own Work</small></figcaption>
            </figure>
            <figure className="text-center my-3">
              <img
                src={PartialAssemblyFrontIrl}
                style={{ width: "30rem" }}
                className="border border-dark mx-auto d-block"
                alt="Partially Assembled Scanner"
              />
              <figcaption>Partially assembled scanner showing custom PCB.</figcaption>
              <figcaption><small>Source: Own Work</small></figcaption>
            </figure>
          </div>
        </section>
      </Container>
    </ExternalLayout>
  )
}

export default Technology;
