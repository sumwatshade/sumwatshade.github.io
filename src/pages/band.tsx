import * as React from 'react'

import PageLayout from "../layouts";
import Page from "../components/Page";
import Container from "../components/Container";
import { graphql } from 'gatsby';
import Img, { FixedObject } from 'gatsby-image';

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


const BandMembers = ({data}: BandQueryProps) => {

    return (
        <>
            <h2 >The Good Enoughs</h2>
            <p ><i>Not great, but It'll work</i></p>
            <p >The four members of the band originally played together in a thrash metal band throughtout high school. As they developed as musicians, each member branched out into a wide array of genres and influences. As we came back to play music with each
        other, we were able to bring together the sounds of classic rock, surf rock, folk, and pop influences to create a unique sound.</p>
            <div >
                <div >
                    <p>Lucas Shadler</p>
                    <Img fixed={data.luke.childImageSharp.fixed} alt="Lucas Shadler" />
                </div>
                <div >
                    <p>Eric Pinales</p>
                    <Img fixed={data.eric.childImageSharp.fixed} alt="Michael Pinales" />
                </div>
                <div >
                    <p>Mike Pinales</p>
                    <Img fixed={data.mike.childImageSharp.fixed} alt="Eric Pinales" />
                </div>
                <div >
                    <p>Jon Bishop</p>
                    <Img fixed={data.jon.childImageSharp.fixed} alt="Jon Bishop" />
                </div>
            </div>
        </>
    );
};

const Albums = () => (
    <>
        <div id="aigt">
            <h2 >All In Good Time</h2>
        </div>

        <div  id="twss">
            <h2 >Things We Shouldnt Say</h2>
            <p ><i>Where the sound began!</i></p><br/>
            <iframe  src="https://bandcamp.com/EmbeddedPlayer/album=3522776097/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://lshadler.bandcamp.com/album/things-we-shouldnt-say">Things We Shouldn&#39;t Say by Lucas Shadler</a></iframe>
        </div>
    </>
);

const Contact = () => (
    <>
        <h2 >CONTACT</h2>
        <p >Fan? Drop a note!</p>
        <div >
            Rochester, NY<br />
            Phone: (585)766-7886<br />
            Email: <a href="mailto:goodenoughsband@gmail.com">goodenoughsband@gmail.com</a><br />
        </div>
    </>
);

const BandPage = (props: BandQueryProps) => (
    <PageLayout>
        <Page>
            <Container>
                <BandMembers {...props}/>
                <Albums />
                <Contact />
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
`