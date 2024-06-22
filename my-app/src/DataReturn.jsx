import React from 'react';

export default function DataReturn(props) {
  return (
    <div style={{ border: "1px solid tomato", margin: "10px", padding: "10px" }}>
      <p >
        {props.name}
      </p>
    </div>
  );
}
