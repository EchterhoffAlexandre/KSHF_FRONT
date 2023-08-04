import { Avatar, Box } from '@mui/material';
import React, { useLayoutEffect, useRef } from 'react';
import Typed from 'typed.js';
import './landingPage.css';
import image from '../../../assets/avatar.png';
import { Link } from 'react-router-dom';

const landingBoxStyles = {
  width: '700px',
  height: '700px',
  position: 'absolute',
  marginTop: 'auto',
  marginLeft: 'auto',
  top: '25%',
  left: '35%'
}

function LandingPage() {
  const mascottDescriptionRef = useRef(null);

  useLayoutEffect(() => {
    if (mascottDescriptionRef.current) {
        const typed = new Typed(mascottDescriptionRef.current, {
            strings: ["Salut, c'est Keep Score And Have Fun ...",
             "On vous permet de suivre et de contrôler les dépenses, d'établir des objectifs d'économies.",
             "En plus de cela, on vous offre des récompenses telles que des cadeaux et des points de fidélité pour vous encourager à économiser et à atteindre des objectifs financiers." 
            ],
            typeSpeed: 70,
            backSpeed: 30,
            backDelay: 1000,
            loop: true
        });
        return () => {
            typed.destroy();
        };
    }
  });
  return (
  <>
    <Box className='landing_box'
      sx={landingBoxStyles}
      >
        <Avatar alt='mascott'src={image} sx={{ width: 300, height: 300, borderRadius: 0 }}  />
        <p className="mascott_description" ref={mascottDescriptionRef}></p>
        <p className='navigation_btn'>
          <Link to={'/signin'} style={{ marginRight:'30px'}}>SignIn</Link>
          <Link to={'/signup'}>SignUp</Link>

        </p>
        
      </Box>

  </>
  );
}
export default LandingPage;