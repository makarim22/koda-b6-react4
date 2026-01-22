import React from 'react';

function About() {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col justify-around font-sans text-xl p-15">
        <p>Our <strong className="text-2xl text-blue-500">founder</strong> </p>
        <p>Meet Makarim Muhammad, the mastermind behind this successful project that turns billions</p>
      </div>
      <div className="flex flex-col justify-around font-sans text-xl p-15">
        <img className='rounded-full w-75 h-75 ' src="src/assets/photome.jpg" alt="image" />
      </div>
    </div>
  );
}

export default About;