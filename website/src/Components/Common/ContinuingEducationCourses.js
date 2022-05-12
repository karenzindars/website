import React from 'react'

export default function ContinuingEducationCourses() {
  return (
    <div>
      <h4>
        <span style={{fontSize: '19px', lineHeight: '18px'}}>
          <strong>&nbsp;{new Date().getFullYear()} Classes for Feldenkrais®&nbsp;</strong>
        </span>
        <strong>
          Practitioners and Trainees
        </strong>
      </h4>
      <p>
        <a rel="noreferrer" target="_blank" id='external-img' href='https://user-images.githubusercontent.com/36345325/167992096-ab8c2346-5388-4af1-9e5f-d49fa60e13ed.png'>
          <img className="fmethod-img"
            alt="2022 Flyer" src="img/2022flyermymomisthebest.png" />
        </a>
      </p>
      <h4 style={{fontWeight: 100}}>
        To register: email Karen at{' '}
        <a href="mailto:karenzindars@gmail.com"
           style={{color: '#6a6a6a'}}>
          karenzindars@gmail.com
        </a>
      </h4>
    </div>
  )
}
