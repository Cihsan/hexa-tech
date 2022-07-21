import React from 'react';
import Features from './Features';
import nextJs from '../../../assets/icon-logo/next.png'
import reactJs from '../../../assets/icon-logo/react.png'
import bootstrap from '../../../assets/icon-logo/bootstrap.png'
import jquery from '../../../assets/icon-logo/jquery.png'
import npm from '../../../assets/icon-logo/npm.png'
import rtl from '../../../assets/icon-logo/rtl.png'
import saass from '../../../assets/icon-logo/sass.png'
import ajax from '../../../assets/icon-logo/ajax.png'
import animated from '../../../assets/icon-logo/animate.png'
import browser from '../../../assets/icon-logo/browser.png'
import code from '../../../assets/icon-logo/code.png'
import customizer from '../../../assets/icon-logo/customize.png'
import developer from '../../../assets/icon-logo/developer.png'
import effect from '../../../assets/icon-logo/effect.png'
import es6 from '../../../assets/icon-logo/es6.png'
import fonts from '../../../assets/icon-logo/fonts.png'
import fontawesome from '../../../assets/icon-logo/fontawesome.png'
import map from '../../../assets/icon-logo/map.png'
import owl from '../../../assets/icon-logo/owl.png'
import responsive from '../../../assets/icon-logo/responsive.png'
import retina from '../../../assets/icon-logo/retina.png'
import seo from '../../../assets/icon-logo/seo.png'
import speed from '../../../assets/icon-logo/speed.png'

const AllFeatures = () => {
  return (
    <div>
        <div>
            <h1 className='text-center text-2xl font-bold p-8 text-purple-600'>Features</h1>
        </div>
        <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-12'>
      <Features featureTitle="Next.js 12+" img={nextJs}/>
      <Features featureTitle="React JS 18+" img={reactJs}/>
      <Features featureTitle="Built on Bootstrap (v5.x)" img={bootstrap}/>
      <Features featureTitle="No JQuery Dependency" img={jquery}/>
      <Features featureTitle="npm" img={npm}/>
      <Features featureTitle="RTL Support" img={rtl}/>
      <Features featureTitle="Built with Sass" img={saass}/>
      <Features featureTitle="Dynamic Contact Form" img={ajax}/>
      <Features featureTitle="Animate CSS" img={animated}/>
      <Features featureTitle="Browser Compatibility" img={browser}/>
      <Features featureTitle="Clean & Professional Code" img={code}/>
      <Features featureTitle="Easy to Customize" img={customizer}/>
      <Features featureTitle="Developer Friendly" img={developer}/>
      <Features featureTitle="Smooth Transition Effects" img={effect}/>
      <Features featureTitle="ES6+ Syntax" img={es6}/>
      <Features featureTitle="Google Fonts" img={fonts}/>
      <Features featureTitle="FontAwesome" img={fontawesome}/>
      <Features featureTitle="Google Map" img={map}/>
      <Features featureTitle="Owl Carousel" img={owl}/>
      <Features featureTitle="Fully Responsive Layout" img={responsive}/>
      <Features featureTitle="Retina Ready" img={retina}/>
      <Features featureTitle="SEO Friendly" img={seo}/>
      <Features featureTitle="Fast & Lightweight" img={speed}/>
      <Features featureTitle="Speed Performance" img={speed}/>
    </div>
        </div>
    </div>
  );
}

export default AllFeatures;
