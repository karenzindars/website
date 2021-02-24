import React from 'react'

export default function Classes() {
  return (
    <div>
      <h3>
        <a title="Group Classes" href="group-classes">
          <strong>Public group classes</strong>
        </a>
      </h3>
      <h3>
        <strong>
          <a title="Continuing Education Courses" href="/continuing-education-courses">
            <span style={{color: '#ff6600'}}>PDU</span>&nbsp;classes available for occupational therapists
          </a>
        </strong>
      </h3>
      <h3><strong><span style={{color: '#ff6600'}}>CEU classes for physical therapists – coming soon!</span></strong></h3>
      <p>
        <img className="fmethod-img"
          alt="Feldenkrais method" src="img/errbody-gettin-down.jpeg" />
      </p>
    </div>
  )
}
