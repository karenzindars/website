import React from 'react'

export default function Home() {
  return (
    <div className="home">
      <h4 style={{textAlign: 'center', marginTop: '10px', marginBottom: '10px'}}>
        <span style={{color: '#000000', fontWeight: 100}}>
          Karen Zindars, MPT, GCFT, MBS Master Practitioner
        </span>
      </h4>
      <img className="fmethod-img" alt="Feldenkrais method" src="img/f-method.png" />
      <h3 style={{color: '#000000', fontWeight: 100, textAlign: 'center'}}>
        A Clear, Fun and Interesting, Efficient, and Simple way to
      </h3>
      <h3 style={{color: '#000000', fontWeight: 100, textAlign: 'center'}}>
        Learn and Teach
      </h3>
      <h3 style={{color: '#000000', fontWeight: 100, textAlign: 'center'}}>
        The Feldenkrais Method®
      </h3>
      <h5 style={{color: '#000000', fontWeight: 100, textAlign: 'center'}}>
        with Karen Zindars (Physical Therapist and Feldenkrais Practitioner®)
      </h5>
      <p style={{textAlign: 'center'}}>
      1979 17th Avenue San Francisco, CA 94116      415-566-2023
      </p>
      <p style={{textAlign: 'center'}}>
        <a title="Contact" href="/contact">karenzindars@gmail.com</a>
      </p>
    </div>
  )
}
