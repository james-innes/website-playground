import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout"
import Video from "../components/Video"

export default ({ data }) => (
  <Layout>
    <article>
      <header>
        <h1>Waldorf Education</h1>
        <p>7 - 16 years at Ringwood Waldorf School</p>
      </header>

      <div className="gallery">
        {data.general.nodes.map(node => (
          <Img className="image" fluid={node.childImageSharp.fluid} />
        ))}
      </div>

      <p>I was born in Guernsey and lived there until seven years old when I was moved to England to begin Waldorf
      education which is based entirely on the philosophies of Rudolf Steiner. Having attended a ‘normal’ state-funded
      school for sixth form I can’t stress enough the difference between the two education systems and how my private
      education has been a journey that has prepared me not just for exams but for life. It is a lengthy challenge to
      explain Waldorf education and so I have embedded a video below which should be of some enlightenment.
        ​</p>

      <ul>
        <li>GCSE Grades</li>
        <li>Higher Tier Maths: 'B', English Language: 'B'</li>
        <li>Due to the nature of the school my classmates and I only took two GCSEs.</li>
      </ul>

      <Video urls={["https://www.youtube.com/embed/MUBVq2pxBZY", "https://www.youtube.com/embed/4uyQej7jjeY", "https://www.youtube.com/embed/BkrgkslnD9g"]} />
    </article>

    <article>
      <header>
        <h2>Main-lesson Book &amp; Craft</h2>
      </header>

      <p>Each day starts with the main lesson that focuses on one subject in depth for several weeks and is accompanied by
      a main-lesson book that is completed with great care and attention as can be seen below. A wide range of
        subjects are included with many crafts, outdoor experiences, and class performances to a wide audience.</p>

      <div className="gallery">
        {data.bookwork.nodes.map(node => (
          <Img className="image" fluid={node.childImageSharp.fluid} />
        ))}
      </div>

      <div className="gallery">
        {data.metalwork.nodes.map(node => (
          <Img className="image" fluid={node.childImageSharp.fluid} />
        ))}
      </div>

      <div className="gallery">
        {data.woodwork.nodes.map(node => (
          <Img className="image" fluid={node.childImageSharp.fluid} />
        ))}
      </div>
    </article>

    <article>
      <header>
        <h1>Performances</h1>
      </header>

      <p>Each year the class performs at least one play even from the early years in combination with orchestras, choirs
      and in-class work which combine to develop skills in self-expression, co-ordination, confidence and teamwork.
      One particularly challenging class experience was the performance of the opera ‘Francesco’, in which everyone
        was given a solo part as well as having to sing in unison with others.</p>

      <div className="gallery">
        {data.performances.nodes.map(node => (
          <Img className="image" fluid={node.childImageSharp.fluid} />
        ))}
      </div>
    </article>

    <article>
      <header>
        <h2>A Midsummer Night's Dream</h2>
        <p>Class 8 Trip to Sweden</p>
      </header>
      <p>The huge effort that the class had to put into the nine performances was astonishing as well as the work over
      several school weeks in school and over the Easter holiday entirely dedicated to the play. Shakespeare’s work is
        particularly appropriate to understanding people around us through studying the extremes of personal traits.</p>

      <div className="gallery">
        {data.midsummer.nodes.map(node => (
          <Img className="image" fluid={node.childImageSharp.fluid} />
        ))}
      </div>
    </article>

    <article>
      <header>
        <h2>Swedish Wilderness Trip</h2>
        <p>Class 10</p>
      </header>

      <p>Although the trip demanded both physical and mental strength, each of us had been prepared for the trip by our
      journey through Steiner Education. While earlier trips had epitomised the human traits that are born out of Big
      Brother situations where a group of people are subject to each other’s company for extended periods, the social
      dynamics of this trip were ones of support and family as everyone pulled together as group effort which was
      essential for survival in completing everyday mundane tasks such as collecting water, staying warm and eating.
      After leaving camp, and the last of civilisation, we began our ten day hike amongst miles of untouched woodland
      nature. Each day we would walk relentlessly until reaching our next site where there were no facilities other
      than a fire pit, a large tarp and containers of food. Upon arrival everyone picked a spot to erect their tarp
      and hammock between two trees before the imminent rain made everything sodden. The trip certainly wasn’t a
        holiday but a somewhat life changing experience that was enjoyed by all and will never be forgotten.</p>

    </article>

    <article>
      <header>
        <h2>Pintograph</h2>
        <p>Class 8 Project</p>
      </header>

      <p>During our exhibition I was available to the school community for demonstration and questions while I also gave a
      formal presentation to the other class members, their parents and visitors making for an audience in excess of
        fifty.</p>

      <div className="gallery">
        {data.pintograph.nodes.map(node => (
          <Img className="image" fluid={node.childImageSharp.fluid} />
        ))}
      </div>
    </article>

    <article>
      <header>
        <h2>Erasmus German Family Exchange</h2>
        <p>Class 8</p>
      </header>

      <p><a href="http://www.waldorfschule-saar-hunsrueck.de/">Website</a>
        The German way of life has many admirable attributes and so I was excited at the opportunity to live with a
        family there for two weeks and study in the local school alongside two classmates.</p>

      <div className="gallery">
        {data.erasmus.nodes.map(node => (
          <Img className="image" fluid={node.childImageSharp.fluid} />
        ))}
      </div>
    </article>

    <article>
      <header>
        <h2>Die Rede Des Führer's</h2>
        <p>Class 10 Digital Media Project</p>
      </header>

      <p>The video depicts a pre-election propaganda reel from the Nazi regime portraying Hitler as a popular and heroic
      figure as the projects brief was to be provocative and give another point of view to a controversial topic.
      Highlighting this, there is a German family gathered around the TV taking the broadcast lightly as they didn't
      know of the terrors Hitler would later come to commit. I directed, edited, sourced props and organised
        everything.</p>

      <p>Animation</p>

      <p>Although Blender has all the tools and capabilities of many expensive industry grade solutions, it is one of the
      most notoriously unusable and non-sensical pieces of open source software I know of. The helicopter model was
      sourced from the SketchUp warehouse. To speed up the process I hired a freelancer online to separate the door
        from the main body of the helicopter so that it could be animated.</p>
    </article>
  </Layout>
);


export const query = graphql`
query {
  general: allFile(filter: {extension: {in: ["jpg", "jpeg", "png"]}, relativePath: {regex: "/rws/general/"}}) {
    nodes {
      childImageSharp {
        fluid(maxWidth: 700, maxHeight: 525) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  bookwork: allFile(filter: {extension: {in: ["jpg", "jpeg", "png"]}, relativePath: {regex: "/rws/bookwork/"}}) {
    nodes {
      childImageSharp {
        fluid(maxWidth: 700, maxHeight: 525) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  metalwork: allFile(filter: {extension: {in: ["jpg", "jpeg", "png"]}, relativePath: {regex: "/rws/metalwork/"}}) {
    nodes {
      childImageSharp {
        fluid(maxWidth: 700, maxHeight: 525) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  woodwork: allFile(filter: {extension: {in: ["jpg", "jpeg", "png"]}, relativePath: {regex: "/rws/woodwork/"}}) {
    nodes {
      childImageSharp {
        fluid(maxWidth: 700, maxHeight: 525) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  performances: allFile(filter: {extension: {in: ["jpg", "jpeg", "png"]}, relativePath: {regex: "/rws/performances/"}}) {
    nodes {
      childImageSharp {
        fluid(maxWidth: 700, maxHeight: 525) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  midsummer: allFile(filter: {extension: {in: ["jpg", "jpeg", "png"]}, relativePath: {regex: "/rws/midsummer/"}}) {
    nodes {
      childImageSharp {
        fluid(maxWidth: 700, maxHeight: 525) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  pintograph: allFile(filter: {extension: {in: ["jpg", "jpeg", "png"]}, relativePath: {regex: "/rws/pintograph/"}}) {
    nodes {
      childImageSharp {
        fluid(maxWidth: 700, maxHeight: 525) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  erasmus: allFile(filter: {extension: {in: ["jpg", "jpeg", "png"]}, relativePath: {regex: "/rws/erasmus/"}}) {
    nodes {
      childImageSharp {
        fluid(maxWidth: 700, maxHeight: 525) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
}
`