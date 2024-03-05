import { useState } from 'react';

export function CreateEvent({ handleClick }) {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [name, setName] = useState('');

  // todo validation on values inputted

  return (
    <div>
      <label>Start Time</label>
      <input type="text" name="start" value={start} />
      <label>End Time</label>
      <input type="text" name="end" value={end} />
      <label>Event Name</label>
      <input type="text" name="name" value={name} />
      <button onClick={() => handleClick(start, end, name)} type="button">
        Save
      </button>
    </div>
  );
}
