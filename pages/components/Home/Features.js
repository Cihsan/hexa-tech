import React from 'react';
import Image from 'next/image'

const Features = ({img, featureTitle}) => {
  return (
    <div>
      <div className="card bg-gray-800 shadow-xl">
  <figure class="px-10 pt-10">
    <Image src={img} alt="NextJS"/>
  </figure>
  <div class="card-body items-center text-center">
    <h2 className="card-title text-white">{featureTitle}</h2>
    
  </div>
</div>
    </div>
  );
}

export default Features;
