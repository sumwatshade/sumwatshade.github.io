
import * as React from 'react';

import Img, { FluidObject } from 'gatsby-image';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import Page from '../components/Page';
import IndexLayout from '../layouts';
import { FluidImageQuery } from '../types.ts';
import SkillBar from '../components/SkillBar';

import { colors } from '../styles/variables';
import { getEmSize } from '../styles/mixins';

const ResumePage = styled(Page)`
  padding: 0;
`;

const ResumeContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;

`;

interface LeftContentProps {
  file: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
}
const LeftContent = (data: LeftContentProps) => (
  <div>
    <Img fluid={data.file.childImageSharp.fluid} alt="Avatar" />
    {/* TODO: Implement PDF resume here */}
    <div>
      <p>Developer and Scientist</p>
      <p>New York, USA</p>
      <p>lshadler13@gmail.com</p>
      <p>(585)766-7886</p>
      <hr />

      <h2>Skills</h2>
      <SkillBar skillName="Mathematics" pct="90" />
      <SkillBar skillName="Data Analytics and Visualization" pct="85" />
      <SkillBar skillName="Machine Learning" pct="60" />
      <SkillBar skillName="Economic Game Theory" pct="40" />
      <SkillBar skillName="Computational Astrophysics" pct="90" />

      <h2>Languages</h2>
      <SkillBar skillName="Python" pct="90" />
      <SkillBar skillName="Javascript" pct="95" />
      <SkillBar skillName="C99" pct="60" />
      <SkillBar skillName="Java" pct="80" />
      <SkillBar skillName="C++" pct="40" />
      <SkillBar skillName="Assembly (MIPS)" pct="45" />
      <SkillBar skillName="MySQL" pct="85" />
    </div>
  </div>
);

const WorkExperience = () => (
  <>
    <h2>Work Experience</h2>
    <div>
      <h5><b>Full Stack Software Developer / Solu Technology Partners</b></h5>
      <h6>July 2017 - January 2018</h6>
      <p>
        <ul>
          <li>
            Work as a member of a scrum team to provide state-of-the-art
            Angular Material applications
          </li>
          <li>
            Integrate a MySQL database architecture with front-end components
            using the Spring Framework
          </li>
          <li>
            Participate in code reviews to maintain a fast-paced
            consumer-focused agenda
          </li>
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
          <li>
            Develop industry-leading experiences for authentication/authorization within
            the Financial sphere
          </li>
          <li>
            Collaboration across several teams in a large company to develop robust
            solutions with great velocity
          </li>
          <li>
            Uncompromising work ensuring that the product meets company standards and
            creates customer delight
          </li>
          <li>
            Relevant Technologies: Javascript, ReactJS, Java, Spring/Spring Boot,
            Webpack, Python, Atlassian (JIRA)
          </li>
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
          <li>
            Use Markov Chain Monte Carlo methods with the benefits of parallel
            computing on powerful multi-core machines
          </li>
          <li>Written in C utilizing the OpenMP framework</li>
        </ul>
      </p>
    </div>
    <div>
      <h5><b>Optimization of MINERvA Proton Selection Algorithm / FermiLab, IL</b></h5>
      <h6>Fall 2014 - Summer 2015</h6>
      <p>
        <ul>
          <li>
            Wrote analysis and algorithmic code to calculate the energy of
            incoming neutrinos in a Neutral-Current Elastic reaction
          </li>
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
          <li>
            Ran three-dimensional morpho-kinematical simulations aimed at confirming
            and analyzing the anticipated gas kinematics of active galactic nuclei
          </li>
          <li>Code developed in Java with collaboration with several groups</li>
          <li>
            Led a week-long workshop at Universidade Federal do Rio Grande do
            Sol in Porto Allegre, Brazil
          </li>
        </ul>
      </p>
    </div>
    <div>
      <h5><b>Research Assistant @ Laboratory for Laser Energetics</b></h5>
      <h6>2013 - 2015</h6>
      <p>
        <ul>
          <li>
            Developed a program using Matlab in order to analyze the flow rate of
            reaction from the main laser target bay into the waste systems
          </li>
          <li>
            Analysis would calculate the current capacity of the molecular sieve
            beds and prompt workers when the system would require maintenance
          </li>
          <li>
            Benefits to efficient task scheduling and limiting the risk of
            radiation leakage
          </li>
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
            Principles of C, Computer Science Theory, Computer Architecture,
            Compilers, Data Structures and Algorithms, Databases
          </li>
          <li>
            <b>Mathematics:</b>
            {' '}
            Multi-variable Calculus, Probability and Statistics, Differential
            Equations, Advanced Linear Algebra, Numerical Linear Algebra
          </li>
          <li>
            <b>Physics:</b>
            {' '}
            Electricity and Magnetism, Classical Mechanics, Statistical Mechanics,
            Quantum Mechanics, Solid State Physics, Physical Optics
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


const LeftPanel = styled.div`
  background-color: ${colors.white};
  border: ${getEmSize(1)}em solid ${colors.black};
  border-radius: 5px;
  padding: 2em;
  margin: 1em;
  flex: 1;
`;

const RightPanel = styled(LeftPanel)`
  flex: 2;
`;

const Resume = ({ data }: FluidImageQuery) => (
  <IndexLayout>
    <ResumePage>
      <ResumeContainer>
        <LeftPanel>
          <LeftContent file={data.file} />
        </LeftPanel>
        <RightPanel>
          <WorkExperience />
          <AcademicExperience />
          <Education />
        </RightPanel>
      </ResumeContainer>
    </ResumePage>
  </IndexLayout>
);

export default Resume;

export const query = graphql`
  query {
    file(relativePath: { eq: "Luke_portrait_01.jpg" }) {
      childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid {
            ...GatsbyImageSharpFluid
          }
      }
    }
  }
`;
