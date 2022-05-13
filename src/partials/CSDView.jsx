import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import FeaturesBg from '../images/50.png';
import FeaturesElement from '../images/image123.jpg';;

function CSDView() {





  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Custom Software Development</h1>
          </div>

          <div>
          <p className="text-xl mt-6 text-gray-600 text-center">Changing Dreams Into Reality</p>
          </div>

          <div className="max-w-1xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h4 mt-6 mb-4">Beauty of Custom Software Development</h1>
          </div>

          {/* Section content */}

           {/* Section content */}
           <div className="md:grid md:grid-cols-12 md:gap-6">

{/* Content */}
<div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">

  {/* Tabs buttons */}
  
  <div className="mb-8 md:mb-0">
      <div>
      <img className=" w-full" src={FeaturesElement} width="300" height="44" alt="Element" />
      </div>

      <div>
      </div>
  </div>
</div>

{/* Tabs items */}
<div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
  <div className="relative flex flex-col text-center lg:text-right">
    {/* Item 1 */}

      <div className="relative inline-flex flex-col">
        <div className="font-bold leading-snug tracking-tight text-left mb-1">
          <h1 className="font-bold text-2xl">Lorem Ipsum</h1>
        </div>
        <br></br>
        <div className="relative inline-flex flex-col text-left">
        <p className="text-gray-600 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type 
             specimen book. It has survived not only five centuries, but also the leap into 
             electronic typesetting, remaining essentially unchanged. It was popularised in 
             the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
             and more recently with desktop publishing software like Aldus PageMaker including 
             versions of Lorem Ipsum.
              </p>
        </div>
        <br></br>

        <div className="relative inline-flex flex-col">
      </div>
      </div>
  </div>
</div >




</div>
</div>


<div>
          <p className="text-xl mt-20 text-gray-600 text-center">Changing Dreams Into Reality</p>
          </div>

          <div className="max-w-1xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h4 mt-6 mb-4">Beauty of Custom Software Development</h1>
          </div>

</div >





    </section >
  );
}

export default CSDView;
