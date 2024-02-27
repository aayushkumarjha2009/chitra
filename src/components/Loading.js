import React from 'react'
import "../index.css"

export const Loading = ({height}) => {
  return (
    <div className="load-div" style={{ height: height ? height : "150px" }}>
      <div className="loader"></div>
    </div>
  )
}
