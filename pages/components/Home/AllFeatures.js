import React from 'react';
import Features from './Features';
import nextJs from '../../../assets/icon-logo/next.png'
import reactJs from '../../../assets/icon-logo/react.png'
import bootstrap from '../../../assets/icon-logo/bootstrap.png'
import jquery from '../../../assets/icon-logo/jquery.png'

const AllFeatures = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-12'>
      <Features featureTitle="Next.js 12+" img={nextJs}/>
      <Features featureTitle="React JS 18+" img={reactJs}/>
      <Features featureTitle="Built on Bootstrap (v5.x)" img={bootstrap}/>
      <Features featureTitle="No JQuery Dependency" img={jquery}/>
    </div>
  );
}

export default AllFeatures;
