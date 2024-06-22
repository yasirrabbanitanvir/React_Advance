import React, { useEffect, useState } from 'react';

export default function UseEffect() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    document.title = `Chat, ${count}`;
    setCalculation(count * 2);
  }, [count]);

  return (
    <div>
      <p>Hablu sent you {count} Notifications</p>
      <p>cal2: {calculation}</p>
      <button className='btn btn-primary' onClick={() => setCount(count + 1)}>Count Me</button>
    </div>
  );
}
