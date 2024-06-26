import React from "react";
import Javascript from "../assets/javascript.png";
import ReactLogo from "../assets/react.png";
import Node from "../assets/node.png";
import MongoDB from "../assets/mongo.png";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import TypeScript from "../assets/Typescript.png";
import Tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div name='skills' className=' w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p- flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-red-400'> Skills </p>
          <p className='py-4'> These are the technologies that I have worked with.</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110  hover:bg-gray-700 duration-500'>
                <img className='w-20 mx-auto' src={Javascript} alt='Javascript icon' />
                <p className='my-4'>JavaScript</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110  hover:bg-gray-700 duration-500'>
                <img className='w-20 mx-auto' src={TypeScript} alt='Github icon' />
                <p className='my-4'>TypeScript</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110  hover:bg-gray-700 duration-500'>
                <img className='w-20 mx-auto' src={Node} alt='Node icon' />
                <p className='my-4'>NodeJs</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110  hover:bg-gray-700 duration-500'>
                <img className='w-20 mx-auto' src={MongoDB} alt='MongoDB icon' />
                <p className='my-4'>Mongo DB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110  hover:bg-gray-700 duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110  hover:bg-gray-700 duration-500'>
                <img className='w-20 mx-auto' src={CSS} alt='CSS icon' />
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:bg-gray-700 duration-500'>
                <img className='w-20 mx-auto' src={ReactLogo} alt='React icon' />
                <p className='my-4'>React</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110  hover:bg-gray-700 duration-500'>
                <img className='w-20 mx-auto' src={Tailwind} alt='Tailwind icon' />
                <p className='my-4'> Tailwind</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
