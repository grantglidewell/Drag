import React from 'react'

import './styles.css'

const DraggableItem = props => {
  return (
    <li {...props} className="item">
      <svg
        className="handle"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24">
        <path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z" />
      </svg>
      {props.label}
    </li>
  )
}

export default DraggableItem
