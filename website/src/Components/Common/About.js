import React from 'react'

export default function About() {
  return (
    <div>
      <div className='items-center'>
        <div className="my-4 text-3xl font-bold text-center text-white opacity-75 md:text-5xl">
          Karen Zindars, MPT, GCFT, MBS Master Practitioner
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="md:w-1/4 flex justify-center items-center mb-4 md:mb-0">
          <img
            style={{ transform: 'scale(100%)', float: 'right', padding: '10px', top: 0 }}
            alt="Karen Ballet" src="img/karen-ballet.jpg" />
        </div>
        <div className="md:w-1/2 p-4 rounded shadow-lg mb-4 md:mb-0">
          <p className="mb-4">
            Karen's interest in movement began at the early age of five with
            classical ballet training. Since then she continued dancing, danced
            professionally for over 20 years, and then taught dance and movement
            to students of all levels and ages.
          </p>
          <p className="mb-4">
            While dancing professionally, she furthered her studies of movement
            and movement science at The University of California, Berkeley in
            Physical Education and Kinesiology. In 1990 she completed her
            Master’s Degree in Physical Therapy <b>(MPT)</b> from the University of
            California, San Francisco Medical School.
          </p>
          <p className="mb-4">
            For over 30 years Karen has worked as a licensed physical therapist
            in outpatient orthopedics. Her experience includes working with a
            broad range of people, from those with severe neurological deficits,
            repetitive strain injuries, and post-operative diagnoses, to
            high-level athletes wanting to improve their performance.
          </p>
          <p className="mb-4">
            In 2006 she completed her training in The Feldenkrais Method® <b>(GCFT)</b>,
            which helped to bridge her experience in rehabilitation with her

            experience in dance and movement education. The Feldenkrais Method®
            has enabled her to facilitate recovery more quickly and with more
            lasting results and learning for the people she works with. Often
            times, where other therapies have failed, her use of The Feldenkrais
            Method® has produced positive outcomes.
          </p>
          <p className="mb-4">
            She received her certification as a <b>MBS Master Practitioner</b> from the
            Mind Body Studies Academy with Master Trainers Mia Segal and Leora
            Gaster in 2011. The following year, in 2012, Karen was awarded Guild
            Certification as an Assistant Trainer in The Feldenkrais Method®,
            allowing her to teach and share her breadth of experience and
            knowledge in professional training programs.
          </p>
        </div>
        <div className="hidden md:w-1/4 lg:flex justify-center items-center">
          <img
            className='w-4/6'
            alt="Karen" src="img/karen-garden.jpg" />
        </div>
      </div>
    </div>
  )
}
