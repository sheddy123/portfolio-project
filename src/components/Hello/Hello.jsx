import React from 'react';
import './Hello.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Hello = () => {
  return (
    <div className='container' id='hello-text'>
      <br />
      <br />

      <div className='container'>
        <div className='row'>
          <div className='div col-9'>
            <p>
              <b className='greeting-hi'>Hi_</b>
            </p>
            <p className='greeting-info'>
              I am a Fullstack developer able to build a Web presence from the
              ground up - from concept, navigation, layout and programming to UX
              and SEO. Skilled at writing well-designed, testable and efficient
              code using current best practices in Web development. Fast
              learner, hard worker and team player who is proficient in an array
              of scripting languages and multimedia Web tools.
            </p>
            <button className='btn cv-btn'>
              {' '}
              <FontAwesomeIcon
                icon={faDownload}
                style={{ color: 'white' }}
              />{' '}
              Download CV
            </button>
          </div>
          <div className='col-3'></div>
        </div>
        <br />
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-9 section__resume resume-list'>
            <h3 class='resume-list_title'>education</h3>
            <div class='resume-list__block'>
              <p class='resume-list__block-title'>
                University of Minnesota Twin Cities{' '}
              </p>
              <p class='resume-list__block-date'>2006 - 2010</p>
              <p>Bachelor Computer Engineering Lorem</p>
            </div>
            <div class='resume-list__block'>
              <p class='resume-list__block-title'>
                School of Informational technologies
              </p>
              <p class='resume-list__block-date'>2004 - 2005</p>
              <p>
                Awesome student, lorem ipsum dolor sit amet, conse ctetur
                adipisicing elit, sed do eius- mod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis
              </p>
            </div>
            <div class='resume-list__block'>
              <p class='resume-list__block-title'>Lorem Ipsum School</p>
              <p class='resume-list__block-date'>2003 - 2006</p>
              <p>
                Student, Lorem ipsum dolor sit amet, consecte tur adipisicing
                elit, sed do eiusmod tempor incididunt ut
              </p>
            </div>
          </div>
          <div className='col-3'></div>
        </div>
        <div class='row'>
          <div class='col-9 section__resume resume-list'>
            <h3 class='resume-list_title'>employment</h3>
            <div class='resume-list__block'>
              <p class='resume-list__block-title'>Apple</p>
              <p class='resume-list__block-date'>2006 - 2010</p>
              <p>Senior Full Stack Developer</p>
            </div>
            <div class='resume-list__block'>
              <p class='resume-list__block-title'>Tech university</p>
              <p class='resume-list__block-date'>2004 - 2005</p>
              <p>
                Awesome developer, lorem ipsum dolor sit amet, conse ctetur
                adipisicing elit, sed do eius- mod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis
              </p>
            </div>
            <div class='resume-list__block'>
              <p class='resume-list__block-title'>Molly’s studio</p>
              <p class='resume-list__block-date'>2003 - 2006</p>
              <p>
                Programmer Lorem ipsum dolor sit amet, consecte tur adipisicing
                elit, sed do eiusmod tempor incididunt ut
              </p>
            </div>
          </div>
          <div className='col-3'></div>
        </div>
      </div>
    </div>
  );
};

export default Hello;
