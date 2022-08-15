import React, { useEffect, useState } from 'react';

// import components
import Banner from './components/Banner';
import Experience from './components/Experience';
import Explore from './components/Explore';
import Header from './components/Header';
import Headsets from './components/Headsets';
import NavMobile from './components/NavMobile';
import Testimonial from './components/Testimonial';
import Video from './components/Video';

//import aos (animate on scroll)
import Aos from 'aos';
import 'aos/dist/aos.css';




function App () {

    const [navMobile, setNavMobile] = useState(false);


    useEffect(() => {
      Aos.init({
        duration: 2000,
        delay: 200,
      });
    });

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
            <div>
              <Experience />
              <Video />
              <Headsets />
              <Testimonial />
              <Explore />
            </div>
            </>
    );
}


export default App;