import React from 'react'

const Ceil = ({ title, selectCeil }) => (
  <div className="ceil" onClick={() => selectCeil()}>
    <span className="ceil-title">
      {title}
    </span>
  </div>
)

export default Ceil
