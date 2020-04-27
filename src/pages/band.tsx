import * as React from 'react';

import { graphql } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import styled from '@emotion/styled';
import PageLayout from '../layouts';
import Page from '../components/Page';
import Container from '../components/Container';
import BandMemberCard from '../components/BandMemberCard';

interface SharpFileProps {
    childImageSharp: {
        fixed: FixedObject
    }
}

interface BandQueryProps {
    data: {
        luke: SharpFileProps,
        eric: SharpFileProps,
        mike: SharpFileProps,
        jon: SharpFileProps,
    }
}

const BandMemberCards = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const BandMembers = ({ data }: BandQueryProps) => (
  <>
    <h2>The Good Enoughs</h2>
    <p><i>Not great, but It&apos;ll work</i></p>
    <p>
      The four members of the band originally played together in a thrash
      metal band throughtout high school. As they developed as musicians,
      each member branched out into a wide array of genres and influences.
      As we came back to play music with each
      other, we were able to bring together the sounds of classic rock, surf
      rock, folk, and pop influences to create a unique sound.
    </p>
    <BandMemberCards>
      <BandMemberCard fixed={data.luke.childImageSharp.fixed} name="Luke Shadler" />
      <BandMemberCard fixed={data.eric.childImageSharp.fixed} name="Eric Pinales" />
      <BandMemberCard fixed={data.mike.childImageSharp.fixed} name="Mike Pinales" />
      <BandMemberCard fixed={data.jon.childImageSharp.fixed} name="Jon Bishop" />
    </BandMemberCards>
  </>
);

const AlbumsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 1em;

`;

const AlbumDisplay = styled.div`
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em; 
`;

const Albums = () => (
  <>
    <h2>Albums</h2>
    <p><i>You didn&apos;t come here to read...</i></p>
    <AlbumsContainer>
      <AlbumDisplay id="aigt">
        <h2>All In Good Time (2018)</h2>
        <iframe
          title="aigt-bc"
          style={{ border: 0, width: '350px', height: '753px' }}
          src="https://bandcamp.com/EmbeddedPlayer/album=1776460933/size=large/bgcol=333333/linkcol=ffffff/transparent=true/"
          seamless
        >
          <a href="http://thegoodenoughs.bandcamp.com/album/all-in-good-time">All in Good Time by The Good Enoughs</a>
        </iframe>
      </AlbumDisplay>

      <AlbumDisplay id="twss">
        <h2>Things We Shouldnt Say (2016)</h2>
        <iframe
          title="tyss-bc"
          style={{ border: 0, width: '350px', height: '720px' }}
          src="https://bandcamp.com/EmbeddedPlayer/album=3522776097/size=large/bgcol=333333/linkcol=ffffff/transparent=true/"
          seamless
        >
          <a href="http://lshadler.bandcamp.com/album/things-we-shouldnt-say">Things We Shouldn&#39;t Say by Lucas Shadler</a>
        </iframe>
      </AlbumDisplay>
    </AlbumsContainer>
  </>
);

const BandPage = ({ data }: BandQueryProps) => (
  <PageLayout>
    <Page>
      <Container>
        <BandMembers data={data} />
        <Albums />
      </Container>
    </Page>
  </PageLayout>
);

export default BandPage;

export const query = graphql`
query {
    luke: file(relativePath: { eq: "luke_school_pic.jpg" }) {
        childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fixed(width: 125) {
            ...GatsbyImageSharpFixed
            }
        }
    }
    eric: file(relativePath: { eq: "eric_school_pic.jpg" }) {
        childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fixed(width: 125) {
            ...GatsbyImageSharpFixed
            }
        }
    }
    mike: file(relativePath: { eq: "mike_school_pic.jpg" }) {
        childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fixed(width: 125) {
            ...GatsbyImageSharpFixed
            }
        }
    }
    jon: file(relativePath: { eq: "jon_school_pic.jpg" }) {
        childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fixed(width: 125) {
            ...GatsbyImageSharpFixed
            }
        }
    }
}
`;
