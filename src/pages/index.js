import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';
import config from '../../config';

import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';
import lake_morraine from '../assets/images/lake_morraine.jpg';
import guitar from '../assets/images/guitar.jpg';
import Scroll from '../components/Scroll';

import { FaBeer } from 'react-icons/fa';

const sections = [
  { id: 'top', name: 'Home', icon: 'fa-home' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const IndexPage = ({ socialLinks = config.socialLinks }) => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
              Hi! I'm <strong>Alex,</strong>
              <br />
              Software Engineer.
            </h2>
            <p>I'm a software engineer based out of Sydney, Australia. I specialize in automating solutions to increase productivity.</p>
            <p>I've made a few things. Check them out!</p>
          </header>

          <footer>
            <Scroll type="id" element={'portfolio'}>
              <a href="#portfolio" className="button">
                Show me
              </a>
            </Scroll>

            <br></br>
            <br></br>
            <br></br>

              <ul className="icons">
                {socialLinks.map(social => {
                  const { icon, name, url } = social;
                  return (
                    <li key={url}>
                      <a href={url} className={`icon ${icon}`}>
                        <span className="label">{name}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>

          </footer>
        </div>
      </section>

      <section id="about" className="three">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>

          <a href="/#" class="sagrada" className="image featured">
            <img src={guitar} alt="" />
          </a>

          <p>
            After graduating with a BSc at Macquarie University, I made the move into IT where I developed <a href="https://github.com/AlexMaunder/pullserviceinfo_API" target="_blank" class="github">automation skills using Python</a>. I enjoyed the impact and increase in efficiency that automating processes can bring.
          </p>

          <p>
            Here are some of the technologies I've been working with recently:
          </p>

          <div style={{display: 'flex', justifyContent: 'center'}} className="container-fluid text-center">
            <Row>
          		<Col>TypeScript</Col>
          		<Col>Python</Col>
          		<Col>MySQL</Col>
          	</Row>
            </div>

            <div style={{display: 'flex', justifyContent: 'center'}} className="container-fluid text-center">
            <Row>
              <Col>HTML &amp; CSS</Col>
              <Col>React</Col>
              <Col>Node.js</Col>
          	</Row>
          </div>

          <br></br>
          <br></br>

          <form action="https://drive.google.com/file/d/1KAGAQBgkJnHphTTGxjEQ5QDUZfcYhJYm/view?usp=sharing" target="_blank">
              <input type="submit" value="Resume"/>
          </form>

        </div>
      </section>

      <section id="portfolio" className="two">
        <div className="container">
          <header>
            <h2>Portfolio</h2>
          </header>

          <p>
            Here are a few projects from my recent General Assembly Software immersive as well as other things I've created...
          </p>

          <div className="row">
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic2} alt="" />
                </a>
                <header>
                  <h3>GeneLab - Phylogeny Visualiser</h3>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic3} alt="" />
                </a>
                <header>
                  <h3>Naughts & Crosses</h3>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic4} alt="" />
                </a>
                <header>
                  <h3>CodeConqr</h3>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic5} alt="" />
                </a>
                <header>
                  <h3>Covid Co-Op</h3>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic6} alt="" />
                </a>
                <header>
                  <h3>Chrome Extension</h3>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic7} alt="" />
                </a>
                <header>
                  <h3>Orci Convallis</h3>
                </header>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>Contact</h2>
          </header>

          <p>
            Drop an email if you'd like to work with me and I'll get back to you asap!
          </p>

          <a href="mailto:a.maunder90@gmail.com">a.maunder90@gmail.com</a>

          <br></br>
          <br></br>
          <br></br>

            <ul className="icons">
              {socialLinks.map(social => {
                const { icon, name, url } = social;
                return (
                  <li key={url}>
                    <a href={url} className={`icon ${icon}`}>
                      <span className="label">{name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

          <br></br>
          <br></br>

        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
