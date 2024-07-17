import React, { Component } from 'react';
import { motion } from 'framer-motion';

class Home extends Component {
  render() {
    return (
      <div className='flex flex-col min-h-[calc(100vh-86px)] z-[-200] bg-gradient-to-r from-gray-800 to-gray-600'>
        <div className="flex flex-col flex-wrap items-center justify-center flex-1 h-full my-4 md:flex-row xl:my-0">
          <div className="flex flex-col items-center justify-center w-full p-4 overflow-y-hidden xl:w-2/5">
            <div className="flex flex-col mb-8 xl:ml-10">
              <motion.h1
                initial={{ opacity: 0, y: -75}}
                animate={{ opacity: 1, y:0}}
                transition={{ duration: 1.5}}
                className="my-4 text-3xl font-bold text-center text-white opacity-75 md:text-5xl xl:text-left">
                  Karen Zindars, MPT, GCFT, MBS Master Practitioner
              </motion.h1>
              <motion.h3
                initial={{ opacity: 0, x: 100}}
                animate={{ opacity: 1, x:0}}
                transition={{ duration: 1, delay: 0.5}}
                style={{ color: '#adb2ba' }}
                className="text-base  text-center xl:text-left md:text-2xl">
                A Clear, Fun and Interesting, Efficient and Simple way to Learn and Teach The Feldenkrais Method®
              </motion.h3>
            </div>
            <motion.div
              initial={{ opacity: 0, y:100}}
              animate={{ opacity: 1, y:0}}
              transition={{ duration: 0.5, delay: 1.5}}
              className='flex justify-center space-x-3'>
              <a href="/#/about">
                <button className="btn btn-outline text-blue-400 hover:text-black border border-blue-400 text-lg">
                  Learn More
                </button>
              </a>
              <a href="/#/contact">
                <button className="btn btn-outline text-green-300 hover:text-black border border-green-300 text-lg">
                  Contact</
                button>
              </a>
            </motion.div>
          </div>

          <div className="w-full h-full p-12 overflow-hidden xl:w-3/5">
            <motion.img
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.7, 0, 0.58, 1]}}
              className="w-full mx-auto transform md:w-4/5 rounded-xl"
              src="img/f-method.png"
            />
          </div>

        </div>
      </div>
    );
  }
}

export default Home;

