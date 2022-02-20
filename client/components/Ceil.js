import React from 'react'

const Ceil = ({ title, selectCeilId }) => (
  <div className="ceil" onClick={() => selectCeilId()}>
    <span className="ceil-title">
      {title}
    </span>
  </div>
)

export default Ceil
