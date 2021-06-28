
import * as React from 'react';

import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Page from '../components/Page';
import IndexLayout from '../layouts';
import { colors, breakpoints } from '../styles/variables';
import { getEmSize } from '../styles/mixins';
// import SkillGraph from '../components/SkillGraph';


const ResumeTitle = styled.h1`
  align-self: center;
  margin: 30px;
`;

const Card = styled.section`
  background-color: var(--bg);
  border: ${getEmSize(1)}em solid var(--textTitle);
  border-radius: 5px;
  padding: 2em;
  margin: 1em;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  min-width: 1000px;

  @media (max-width: 1200px) {
      min-width: 95vw;
      max-width: 95vw;
    }
`;

const CardTitle = styled.h2`
  color: goldenrod;
  align-self: center;
`;

const CardItemHeader = styled.h3`
  color: goldenrod;
`;

const CardDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardItemSubheaderHeader = styled.h4`
  color: ${colors.ui.medium};
  margin: 0 0 20px 0;
`;

const CardItemList = styled.ul``;
const CardItemListItem = styled.li``;

const ResumePage = styled(Page)`
  padding: 0;
`;

const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100vw;
`;

const ResumeDownloadButton = styled(Link)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    width: 100%;
    height: 100%;
    padding: 1em;
    align-self: center;
    width: 300px;
    @media (max-width: ${breakpoints.md}px) {
      flex-direction: column-reverse;
    }
`;


const PersonalInfo = () => (
  <>
    <CardTitle>Contact Info</CardTitle>
    <CardItemList>
      <CardItemListItem>San Diego, CA</CardItemListItem>
      <CardItemListItem>lshadler13@gmail.com</CardItemListItem>
      <CardItemListItem>(585)766-7886</CardItemListItem>
    </CardItemList>
  </>
);

const WorkExperience = () => (
  <>
    <CardTitle>Work Experience</CardTitle>
    <CardDetail>
      <CardItemHeader>Senior Software Engineer / Intuit (AppFabric)</CardItemHeader>
      <CardItemSubheaderHeader>January 2021 -- Present</CardItemSubheaderHeader>
      <CardItemList>
        <CardItemListItem>
          Tech lead for tooling that builds Intuit&apos;s frontend ecosystem
        </CardItemListItem>
        <CardItemListItem>
          Extensive work developing and managing CDNs and edge networks, powered by
          Akamai and AWS
        </CardItemListItem>
        <CardItemListItem>
          Experience managing and tooling around a monorepo for our internal tooling.
        </CardItemListItem>
        <CardItemListItem>
          Focus on developing technology that is open-source oriented
        </CardItemListItem>
        <CardItemListItem>
          Relevant Technologies: AWS, ReactJS, Webpack, Go, Akamai, Oclif
        </CardItemListItem>
      </CardItemList>
    </CardDetail>
    <CardDetail>
      <CardItemHeader>Software Engineer / Intuit (Identity)</CardItemHeader>
      <CardItemSubheaderHeader>February 2018 - December 2020</CardItemSubheaderHeader>
      <CardItemList>
        <CardItemListItem>
          Develop industry-leading experiences for authentication/authorization within
          the Financial sphere
        </CardItemListItem>
        <CardItemListItem>
          Collaboration across several teams in a large company to develop robust
          solutions with great velocity
        </CardItemListItem>
        <CardItemListItem>
          Uncompromising work ensuring that the product meets company standards and
          creates customer delight
        </CardItemListItem>
        <CardItemListItem>
          Relevant Technologies: Javascript, ReactJS, Java, Spring/Spring Boot,
          Webpack, Python, Atlassian (JIRA)
        </CardItemListItem>
      </CardItemList>
    </CardDetail>

    <CardDetail>
      <CardItemHeader>Full Stack Software Developer / Solu Technology Partners</CardItemHeader>
      <CardItemSubheaderHeader>July 2017 - January 2018</CardItemSubheaderHeader>
      <CardItemList>
        <CardItemListItem>
          Work as a member of a scrum team to provide state-of-the-art
          Angular Material applications
        </CardItemListItem>
        <CardItemListItem>
          Integrate a MySQL database architecture with front-end components
          using the Spring Framework
        </CardItemListItem>
        <CardItemListItem>
          Participate in code reviews to maintain a fast-paced
          consumer-focused agenda
        </CardItemListItem>
      </CardItemList>
    </CardDetail>

    <CardDetail>
      <CardItemHeader>
        Research and Development Engineer (Co-Op)/ WiTricity Corporation
      </CardItemHeader>
      <CardItemSubheaderHeader>
        August 2015 - January 2015
      </CardItemSubheaderHeader>
      <CardItemList>
        <CardItemListItem>
          Developed auxiliary systems to aid in the safety of wireless power transfer
        </CardItemListItem>
        <CardItemListItem>
          Prototyped embedded data acquisition systems from PCB design to fabrication
        </CardItemListItem>
        <CardItemListItem>
          Firmware produced in C, visualized in Python with Qt Graphics toolkit
        </CardItemListItem>
      </CardItemList>
    </CardDetail>
  </>
);

const AcademicExperience = () => (
  <>
    <CardTitle>Academic Experience</CardTitle>
    <CardDetail>
      <CardItemHeader>
        Improving the Stochastic Template Bank Algorithm for aLIGO / Caltech
      </CardItemHeader>
      <CardItemSubheaderHeader>Summer 2016</CardItemSubheaderHeader>
      <CardItemList>
        <CardItemListItem>
          Developed an improved method of analyzing Gravitational Wave data
        </CardItemListItem>
        <CardItemListItem>
          Use Markov Chain Monte Carlo methods with the benefits of parallel
          computing on powerful multi-core machines
        </CardItemListItem>
        <CardItemListItem>Written in C utilizing the OpenMP framework</CardItemListItem>
      </CardItemList>
    </CardDetail>
    <CardDetail>
      <CardItemHeader>
        Optimization of MINERvA Proton Selection Algorithm / FermiLab, IL
      </CardItemHeader>
      <CardItemSubheaderHeader>Fall 2014 - Summer 2015</CardItemSubheaderHeader>
      <CardItemList>
        <CardItemListItem>
          Wrote analysis and algorithmic code to calculate the energy of
          incoming neutrinos in a Neutral-Current Elastic reaction
        </CardItemListItem>
        <CardItemListItem>
          Work with the MINERvA detector, a large collaboration at Fermilab
        </CardItemListItem>
        <CardItemListItem>Extended to an REU at the University of Rochester</CardItemListItem>
      </CardItemList>
    </CardDetail>
    <CardDetail>
      <CardItemHeader>Feeding and Feedback of Active Galactic Nuclei</CardItemHeader>
      <CardItemSubheaderHeader>2013 - 2015</CardItemSubheaderHeader>
      <CardItemList>
        <CardItemListItem>
          Ran three-dimensional morpho-kinematical simulations aimed at confirming
          and analyzing the anticipated gas kinematics of active galactic nuclei
        </CardItemListItem>
        <CardItemListItem>
          ode developed in Java with collaboration with several groups
        </CardItemListItem>
        <CardItemListItem>
          Led a week-long workshop at Universidade Federal do Rio Grande do
          Sol in Porto Allegre, Brazil
        </CardItemListItem>
      </CardItemList>
    </CardDetail>
    <CardDetail>
      <CardItemHeader>Research Assistant @ Laboratory for Laser Energetics</CardItemHeader>
      <CardItemSubheaderHeader>2013 - 2015</CardItemSubheaderHeader>

      <CardItemList>
        <CardItemListItem>
          Developed a program using Matlab in order to analyze the flow rate of
          reaction from the main laser target bay into the waste systems
        </CardItemListItem>
        <CardItemListItem>
          Analysis would calculate the current capacity of the molecular sieve
          beds and prompt workers when the system would require maintenance
        </CardItemListItem>
        <CardItemListItem>
          Benefits to efficient task scheduling and limiting the risk of
          radiation leakage
        </CardItemListItem>
      </CardItemList>

    </CardDetail>
  </>
);

const Education = () => (
  <>
    <CardTitle>Education</CardTitle>
    <CardDetail>
      <CardItemHeader>Physics, B.S. - Rochester Institute of Technology</CardItemHeader>
      <CardItemSubheaderHeader>2013-2017</CardItemSubheaderHeader>
      <CardItemList>
        <CardItemListItem>
          <b>Computer Science:</b>
          {' '}
          Principles of C, Computer Science Theory, Computer Architecture,
          Compilers, Data Structures and Algorithms, Databases
        </CardItemListItem>
        <CardItemListItem>
          <b>Mathematics:</b>
          {' '}
          Multi-variable Calculus, Probability and Statistics, Differential
          Equations, Advanced Linear Algebra, Numerical Linear Algebra
        </CardItemListItem>
        <CardItemListItem>
          <b>Physics:</b>
          {' '}
          Electricity and Magnetism, Classical Mechanics, Statistical Mechanics,
          Quantum Mechanics, Solid State Physics, Physical Optics
        </CardItemListItem>
        <CardItemListItem>
          <b>Engineering:</b>
          {' '}
          Electronic Measurements, Circuits (AC/DC), Electronics I
        </CardItemListItem>
      </CardItemList>
    </CardDetail>
  </>
);

const Skills = () => (
  <>
    <CardTitle>Skills and Technology</CardTitle>
    <CardDetail>

      <CardItemHeader>Languages</CardItemHeader>
      <CardItemList>
        <CardItemListItem>Javascript/Typescript</CardItemListItem>
        <CardItemListItem>HTML</CardItemListItem>
        <CardItemListItem>CSS</CardItemListItem>
        <CardItemListItem>Python</CardItemListItem>
        <CardItemListItem>Go</CardItemListItem>
      </CardItemList>
      <CardItemHeader>Frameworks</CardItemHeader>
      <CardItemList>
        <CardItemListItem>ReactJS</CardItemListItem>
        <CardItemListItem>AngularJS</CardItemListItem>
        <CardItemListItem>Spring Boot</CardItemListItem>
        <CardItemListItem>OClif (CLI Framework)</CardItemListItem>
      </CardItemList>
      <CardItemHeader>Skills</CardItemHeader>
      <CardItemList>
        <CardItemListItem>AWS Solutions Architect</CardItemListItem>
        <CardItemListItem>Akamai</CardItemListItem>
        <CardItemListItem>Kubernetes</CardItemListItem>
        <CardItemListItem>Jenkins/Groovy</CardItemListItem>
        <CardItemListItem>Data Analysis and Visualization</CardItemListItem>
      </CardItemList>
    </CardDetail>
  </>
);

const Resume = () => (
  <IndexLayout>
    <ResumePage>
      <ResumeContainer>
        <ResumeTitle>Resume</ResumeTitle>
        <ResumeDownloadButton to="https://github.com/sumwatshade/resume/raw/master/short/resume.pdf">Download resume PDF here</ResumeDownloadButton>
        <Card>
          <WorkExperience />
        </Card>
        <Card>
          <AcademicExperience />
        </Card>
        <Card>
          <Education />
        </Card>
        <Card>
          <PersonalInfo />
        </Card>
        <Card>
          <Skills />
        </Card>
      </ResumeContainer>
    </ResumePage>
  </IndexLayout>
);

export default Resume;

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "Luke_portrait_01.jpg" }) {
//       childImageSharp {
//           # Specify the image processing specifications right in the query.
//           # Makes it trivial to update as your page's design changes.
//           fluid {
//             ...GatsbyImageSharpFluid
//           }
//       }
//     }
//   }
// `;
