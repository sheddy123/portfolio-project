import React from 'react';
import Typed from 'react-typed';
import './Header.css';

const Header = () => {
  return (
    <>
      <div className='header-wrapper'>
        <div className='main-info'>
          <h1></h1>
          <Typed
            className='typed-text'
            strings={[
              'Web Design',
              'Web Development',
              'Facebook Ads SMM',
              'Google Ads',
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
          <a href='' className='btn-main-offer'>
            contact me
          </a>
        </div>
        <div className='container container-personal-profile'>
          <div className='row personal-profile'>
            <div className='col-md-4 personal-profile__avatar'>
              <img className='img-profile' src='' alt='' />
            </div>
            <div className='col-md-8'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
