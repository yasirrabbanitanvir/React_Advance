import React from 'react'

export default function 
  (props) {
  props.OnMethod("Hello My Parent");
  return (
    <div>
          <p>This is child</p>
          <p>{props.Title}</p>
    </div>
  )
}
