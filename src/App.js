import React, { useEffect, useState } from 'react';

// import components
import Banner from './components/Banner';
import Header from './components/Header';
import NavMobile from './components/NavMobile';
//import Experience from './components/Experience';
//import Video from './components/Video';
//import Headsets from './components/Headsets';
//import Testimonial from './components/Testimonial';
//import Explore from './components/Explore';

// import aos (animate on scroll)
//import Aos from 'aos';
//import 'aos/dist/aos.css';




function App () {

    const [navMobile, setNavMobile] = useState(true);


    return (
        <>
            <div className='relative overflow-hidden before:w-[600px]
            before:h-[200px] before:bg-circle before:bg-no-repeat
            before:absolute before:-top-16 before:left-[600px] 
            '>
                <Header setNavMobile={setNavMobile} />
            <Banner />
            <div className={`${
          navMobile ? 'right-0' : '-right-full'
        } fixed top-0 bottom-0 w-48 transition-all`}
      >
        <NavMobile setNavMobile={setNavMobile} />
      </div>
            </div>
            </>
    );
}


export default App;