import React, { useState } from 'react';

export default function AppHome() {
  const [Toggler, SetToggler] = useState(true);

  return (
    <div>
      <button className='btn btn-primary' onClick={() => SetToggler(!Toggler)}>
        {Toggler ? 'Close' : 'Show'}
      </button>
     {Toggler &&  <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolorem quae deserunt optio itaque eius voluptatibus quas ab voluptates? Dolore.
      </p>}
    </div>
  );
}
