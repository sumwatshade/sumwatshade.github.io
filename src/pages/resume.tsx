
import * as React from 'react';

import Img, { FixedObject } from 'gatsby-image';
import { graphql } from 'gatsby';
import Page from '../components/Page';
import Container from '../components/Container';
import IndexLayout from '../layouts';
import { FixedImageQuery } from '../types.ts';

interface HeadingProps {
  imageSrc: FixedObject
}

const Heading = ({ imageSrc }: HeadingProps) => (
  <div>
    <Img fixed={imageSrc} alt="Avatar" />
    <div>
      <h2>Lucas Shadler</h2>
    </div>
  </div>
);

const Skills = () => (
  <div>

    <div>
      <div>
        <form method="get" action="assets/resume.pdf">
          <button type="submit">PDF Version</button>
        </form>
      </div>
      <div>
        <p>Developer and Scientist</p>
        <p>New York, USA</p>
        <p>lshadler13@gmail.com</p>
        <p>(585)766-7886</p>
        <hr />

        <p><b>Skills</b></p>
        <p>Mathematics</p>
        <div>
          <div style={{ height: '24px', width: '90%' }} />
        </div>
        <p>Data Analytics and Visualization</p>
        <div>
          <div style={{ height: '24px', width: '85%' }} />
        </div>
        <p>Machine Learning</p>
        <div>
          <div style={{ height: '24px', width: '60%' }} />
        </div>
        <p>Economic Game Theory</p>
        <div>
          <div style={{ height: '24px', width: '50%' }} />
        </div>
        <p>Computational Astrophysics</p>
        <div>
          <div style={{ height: '24px', width: '90%' }} />
        </div>

        <p><b>Languages</b></p>
        <p>Python</p>
        <div>
          <div style={{ height: '24px', width: '95%' }} />
        </div>
        <p>C</p>
        <div>
          <div style={{ height: '24px', width: '60%' }} />
        </div>
        <p>Java</p>
        <div>
          <div style={{ height: '24px', width: '80%' }} />
        </div>
        <p>C++</p>
        <div>
          <div style={{ height: '24px', width: '40%' }} />
        </div>
        <p>Javascript</p>
        <div>
          <div style={{ height: '24px', width: '85%' }} />
        </div>
        <p>Assembly (MIPS)</p>
        <div>
          <div style={{ height: '24px', width: '50%' }} />
        </div>
        <p>MySQL</p>
        <div>
          <div style={{ height: '24px', width: '85%' }} />
        </div>
      </div>
    </div>
  </div>
);

const WorkExperience = () => (
  <>
    <h2>Work Experience</h2>
    <div>
      <h5><b>Full Stack Software Developer / Solu Technology Partners</b></h5>
      <h6>July 2017 - Present</h6>
      <p>
        <ul>
          <li>Work as a member of a scrum team to provide state-of-the-art Angular Material applications</li>
          <li>Integrate a MySQL database architecture with front-end components using the Spring Framework</li>
          <li>Participate in code reviews to maintain a fast-paced consumer-focused agenda</li>
        </ul>
      </p>
    </div>

    <div>
      <h5><b>Research and Development Engineer (Co-Op)/ WiTricity Corporation</b></h5>
      <h6>August 2015 - January 2015</h6>
      <p>
        <ul>
          <li>Developed auxiliary systems to aid in the safety of wireless power transfer</li>
          <li>Prototyped embedded data acquisition systems from PCB design to fabrication</li>
          <li>Firmware produced in C, visualized in Python with Qt Graphics toolkit</li>
        </ul>
      </p>
    </div>

    <div>
      <h5><b>Software Engineer / Intuit</b></h5>
      <h6>February 2018 - Present</h6>
      <p>
        <ul>
          <li>Develop industry-leading experiences for authentication/authorization within the Financial sphere</li>
          <li>Collaboration across several teams in a large company to develop robust solutions with great velocity</li>
          <li>Uncompromising work ensuring that the product meets company standards and creates customer delight</li>
          <li>Relevant Technologies: Javascript, ReactJS, Java, Spring/Spring Boot, Webpack, Python, Atlassian (JIRA)</li>
        </ul>
      </p>
    </div>
  </>
);

const AcademicExperience = () => (
  <>
    <h2>Academic Projects</h2>
    <div>
      <h5><b>Improving the Stochastic Template Bank Algorithm for aLIGO / Caltech</b></h5>
      <h6>Summer 2016</h6>
      <p>
        <ul>
          <li>Developed an improved method of analyzing Gravitational Wave data</li>
          <li>Use Markov Chain Monte Carlo methods with the benefits of parallel computing on powerful multi-core machines</li>
          <li>Written in C utilizing the OpenMP framework</li>
        </ul>
      </p>
    </div>
    <div>
      <h5><b>Optimation of MINERvA Proton Selection Algorithm / FermiLab, IL</b></h5>
      <h6>Fall 2014 - Summer 2015</h6>
      <p>
        <ul>
          <li>Wrote analysis and algorithmic code to calculate the energy of incoming neutrinos in a Neutral-Current Elastic reaction</li>
          <li>Work with the MINERvA detector, a large collaboration at Fermilab</li>
          <li>Extended to an REU at the University of Rochester</li>
        </ul>
      </p>
    </div>
    <div>
      <h5><b>Feeding and Feedback of Active Galactic Nuclei</b></h5>
      <h6>2013 - 2015</h6>
      <p>
        <ul>
          <li>Ran three-dimensional morpho-kinematical simulations aimed at confirming and analyzing the anticipated gas kinematics of active galactic nuclei</li>
          <li>Code developed in Java with collaboration with several groups</li>
          <li>Led a week-long workshop at Universidade Federal do Rio Grande do Sol in Porto Allegre, Brazil</li>
        </ul>
      </p>
    </div>
    <div>
      <h5><b>Research Assistant @ Laboratory for Laser Energetics</b></h5>
      <h6>2013 - 2015</h6>
      <p>
        <ul>
          <li>Developed a program using Matlab in order to analyze the flow rate of reaction from the main laser target bay into the waste systems</li>
          <li>Analysis would calculate the current capacity of the molecular sieve beds and prompt workers when the system would require maintenance</li>
          <li>Benefits to efficient task scheduling and limiting the risk of radiation leakage</li>
        </ul>
      </p>
    </div>
  </>
);

const Education = () => (
  <>
    <h2>Education</h2>
    <div>
      <h5><b>Rochester Institute of Technology</b></h5>
      <h6>2013-2017</h6>
      <p>Physics, B.S.</p>
      <p>
        Relevant Coursework:
        <ul>
          <li>
            <b>Computer Science:</b>
            {' '}
            Principles of C, Computer Science Theory, Computer Architecture, Compilers, Data Structures and Algorithms, Databases
          </li>
          <li>
            <b>Mathematics:</b>
            {' '}
            Multivariable Calculus, Probability and Statistics, Differential Equations, Advanced Linear Algebra, Numerical Linear Algebra
          </li>
          <li>
            <b>Physics:</b>
            {' '}
            Electricity and Magnetism, Classical Mechanics, Statistical Mechanics, Quantum Mechanics, Solid State Physics, Physical Optics
          </li>
          <li>
            <b>Engineering:</b>
            {' '}
            Electronic Measurements, Circuits (AC/DC), Electronics I
          </li>
        </ul>
      </p>
    </div>
  </>
);


const Resume = ({ data }: FixedImageQuery) => (
  <IndexLayout>
    <Page>
      <Container>
        <Heading imageSrc={data.file.childImageSharp.fixed} />
        <Skills />
        <WorkExperience />
        <AcademicExperience />
        <Education />
      </Container>
    </Page>
  </IndexLayout>
);

export default Resume;

export const query = graphql`
  query {
    file(relativePath: { eq: "Luke_portrait_01.jpg" }) {
      childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 125, height: 125) {
            ...GatsbyImageSharpFixed
          }
      }
    }
  }
`;
