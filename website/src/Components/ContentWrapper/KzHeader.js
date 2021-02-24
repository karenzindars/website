import React from 'react'

export default function KzHeader(props) {
  return (
    <div className="kz-header">
      <h1>
        {props.headerText}
      </h1>
      <hr />
    </div>
  )
}
