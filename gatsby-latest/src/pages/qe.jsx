import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import Video from "../components/Video";

export default ({ data }) => (
  <Layout>
    <article>
      <header>
        <h1>Queen Elizabeth's School Wimborne</h1>
        <p>Sixth Form from 16+ Years</p>
      </header>

      <ul>
        <li>
          <p>Computer Science, A-Level, Not ICT</p>
        </li>
        <li>
          <p>Product Design, A-Level</p>
        </li>
        <li>
          <p>Enterprise, BTEC Diploma</p>
        </li>
        <li>
          <p>MOOCS, Online Courses, Udemy</p>
        </li>
        <li>
          <p>EPQ, Extended Project Qualification, Grade: A</p>
        </li>
        <li>
          <p>Media Studies, A-Level, Additional Subject</p>
        </li>
        <li>
          <p>100% Term Attendance Certification</p>
        </li>
        <li>
          <p>8 Behaviour Points</p>
        </li>
        <li>
          <p>Performance Celebration Event</p>
        </li>
        <li>
          <p>
            Invited to Governors annual Evening event to receive award
            recognising achievement
          </p>
        </li>
        <li>
          <p>Working with Senior Leadership Team to develop PR</p>
        </li>
      </ul>

      <div className="gallery">
        {data.qeBanner.nodes.map((node) => (
          <Img className="image" fluid={node.childImageSharp.fluid} />
        ))}
      </div>

      <div className="gallery">
        {data.intro.nodes.map((node) => (
          <Img className="image" fluid={node.childImageSharp.fluid} />
        ))}
      </div>
    </article>

    <article>
      <header>
        <h1>Website Design &amp; Development</h1>

        <p>
          Heading discussions with senior administration regarding design and
          development of the school's new website.
        </p>
      </header>

      <div className="gallery">
        {data.website.nodes.map((node) => (
          <Img className="image" fluid={node.childImageSharp.fluid} />
        ))}
      </div>
    </article>

    <article>
      <header>
        <h1>Media Coverage</h1>
        <p>Sports Day</p>
      </header>

      <p>
        A team of some twenty students covered the school sports day with my
        role to collect, organise, and edit all the captured footage. To capture
        a new view of the event I used the quadcopter I had built to take arial
        shots.
      </p>

      <Video
        urls={[
          "https://www.youtube.com/embed/MUBVq2pxBZY",
          "https://www.youtube.com/embed/4uyQej7jjeY",
          "https://www.youtube.com/embed/BkrgkslnD9g",
        ]}
      />
    </article>

    <article>
      <header>
        <h1>Computer Science</h1>
      </header>
    </article>

    <article>
      <header>
        <h1>Non Exam Assessment Python, TKinter, MySQL</h1>
      </header>

      <p>
        <a href="https://drive.google.com/open?id=1Lnn3TZKEnjqwRoEX4q6HnCOwhhlu4FKT">
          Download
        </a>{" "}
        | <a href="https://youtu.be/kY1O3cNeuFs">Demo</a>
      </p>

      <div className="gallery">
        {data.neaBanner.nodes.map((node) => (
          <Img className="image" fluid={node.childImageSharp.fluid} />
        ))}
      </div>

      <div className="gallery">
        {data.neaArtwork.nodes.map((node) => (
          <Img className="image" fluid={node.childImageSharp.fluid} />
        ))}
      </div>
    </article>

    <article>
      <header>
        <h2>Competed 78 of 257 sections</h2>

        <p>Udemy iOS 11 Swift XCode Course</p>
      </header>

      <ul>
        <li>
          <p>Source: Udemy</p>
        </li>

        <li>
          <p>Lectures: 248</p>
        </li>

        <li>
          <p>Video: 36.5 hours</p>
        </li>

        <li>
          <p>Current Students: 15775​​</p>
        </li>

        <li>
          <p>XCode and Interface Builder</p>
        </li>

        <li>
          <p>Inputs, Buttons, and Reactive Interfaces</p>
        </li>

        <li>
          <p>Apple’s New Programming Language: Swift</p>
        </li>

        <li>
          <p>Variables, Arrays, Tables, and Loops</p>
        </li>

        <li>
          <p>Navigation, Storage, and Live Content</p>
        </li>

        <li>
          <p>Images, Maps and Music</p>
        </li>

        <li>
          <p>Accelerometer and Motion Feedback</p>
        </li>

        <li>
          <p>Core Data and JSON</p>
        </li>

        <li>
          <p>Online Storage With Parse</p>
        </li>

        <li>
          <p>Games and the Sprite Kit</p>
        </li>

        <li>
          <p>Instagram and Snapchat Clones</p>
        </li>

        <li>
          <p>App Store Submission</p>
        </li>

        <li>
          <p>Marketing Website For Your App</p>
        </li>
      </ul>
    </article>

    <article>
      <header>
        <h1>Entrepreneurship</h1>
        <p>Pearson BTEC Level 3 National Diploma</p>
      </header>

      <p>
        <a href="https://drive.google.com/open?id=17YIqM_k4Gxl0nfJMJNBfXVL1L2BSOU-w">
          Download
        </a>
      </p>

      <p>
        Case study on McDonald's and the entrepreneur behind it (Distinction)
        Study and development of new business plan (Distinction) Planning and
        running of Social Enterprise (Distinction) Marketing controlled
        assessment (Don't Know yet) Personal &amp; Business Finance Exam (Merit)
      </p>

      <div className="gallery">
        {data.entBanner.nodes.map((node) => (
          <Img className="image" fluid={node.childImageSharp.fluid} />
        ))}
      </div>

      <div className="gallery">
        {data.entWork.nodes.map((node) => (
          <Img className="image" fluid={node.childImageSharp.fluid} />
        ))}
      </div>
    </article>

    <article>
      <header>
        <h1>A-Level</h1>
        <p>Media Studies</p>
      </header>

      <p>
        <a href="https://jamesinnes2169.wixsite.com/jamesinnes/integrity">
          Video
        </a>
      </p>

      <p>
        While nearly everyone has a three subject timetable I asked to enrol in
        a fourth as well as two additional enrichments. However while I enjoyed
        completing the first years assignment with grades [A] I later dropped
        the subject as I didn't have enough time to study for the theory exams
        as well as completing my Product Design coursework.
      </p>

      <div className="gallery">
        {data.integrity.nodes.map((node) => (
          <Img className="image" fluid={node.childImageSharp.fluid} />
        ))}
      </div>

      <Video
        urls={[
          "https://www.youtube.com/embed/MUBVq2pxBZY",
          "https://www.youtube.com/embed/4uyQej7jjeY",
          "https://www.youtube.com/embed/BkrgkslnD9g",
        ]}
      />
    </article>

    <article>
      <header>
        <h1>Product Design</h1>
      </header>
    </article>

    <article>
      <header>
        <h1>Chair Project</h1>
      </header>
      <p>
        <a href="https://drive.google.com/open?id=1U3iJ7gEgO9IDVn9hV5__5Z67P01_b8u_">
          Download
        </a>
        |<b>Words: 8324</b>| <b>Pages: 29</b>
      </p>

      <div className="gallery">
        {data.lamp.nodes.map((node) => (
          <Img className="image" fluid={node.childImageSharp.fluid} />
        ))}
      </div>

      <Video
        urls={[
          "https://www.youtube.com/embed/MUBVq2pxBZY",
          "https://www.youtube.com/embed/4uyQej7jjeY",
          "https://www.youtube.com/embed/BkrgkslnD9g",
        ]}
      />
    </article>

    <article>
      <header>
        <h1>Sideboard</h1>
      </header>

      <a href="https://jamesinnes2169.wixsite.com/harrold">Download</a>
    </article>
  </Layout>
);

export const query = graphql`
  query {
    website: allFile(
      filter: {
        extension: { in: ["jpg", "jpeg", "png"] }
        relativePath: { regex: "/qe/website/" }
      }
    ) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 700, maxHeight: 525) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    lamp: allFile(
      filter: {
        extension: { in: ["jpg", "jpeg", "png"] }
        relativePath: { regex: "/pd/lamp/" }
      }
    ) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 700, maxHeight: 525) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    chair: allFile(
      filter: {
        extension: { in: ["jpg", "jpeg", "png"] }
        relativePath: { regex: "/pd/chair/" }
      }
    ) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 700, maxHeight: 525) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    integrity: allFile(
      filter: {
        extension: { in: ["jpg", "jpeg", "png"] }
        relativePath: { regex: "/qe/ms/integrity/" }
      }
    ) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 700, maxHeight: 525) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    entBanner: allFile(
      filter: {
        extension: { in: ["jpg", "jpeg", "png"] }
        relativePath: { regex: "/ent/banner/" }
      }
    ) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 700, maxHeight: 525) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    entWork: allFile(
      filter: {
        extension: { in: ["jpg", "jpeg", "png"] }
        relativePath: { regex: "/ent/work/" }
      }
    ) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 700, maxHeight: 525) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    neaBanner: allFile(
      filter: {
        extension: { in: ["jpg", "jpeg", "png"] }
        relativePath: { regex: "/qe/nea/banner/" }
      }
    ) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 700, maxHeight: 525) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    neaArtwork: allFile(
      filter: {
        extension: { in: ["jpg", "jpeg", "png"] }
        relativePath: { regex: "/qe/nea/artwork/" }
      }
    ) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 700, maxHeight: 525) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    qeBanner: allFile(
      filter: {
        extension: { in: ["jpg", "jpeg", "png"] }
        relativePath: { regex: "/qe/banner/" }
      }
    ) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 700, maxHeight: 525) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    ent: allFile(
      filter: {
        extension: { in: ["jpg", "jpeg", "png"] }
        relativePath: { regex: "/ent/banner/" }
      }
    ) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 700, maxHeight: 525) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    intro: allFile(
      filter: {
        extension: { in: ["jpg", "jpeg", "png"] }
        relativePath: { regex: "/qe/intro/" }
      }
    ) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 700, maxHeight: 525) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
