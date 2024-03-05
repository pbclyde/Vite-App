import { useState } from 'react';
import moment from 'moment';

const hours = Array.from(
  {
    length: 48,
  },
  (_, hour) =>
    moment({
      hour: Math.floor(hour / 2),
      minutes: hour % 2 === 0 ? 0 : 30,
    }).format('HH:mm'),
);

export function DayGrid() {
  const [data, setData] = useState([]);

  function handleOnChange(i, val) {
    setData(prevState => {
      prevState[i] = val;
      return prevState;
    });
  }

  return (
    <table>
      <tbody>
        {hours.map((str, i) => (
          <tr key={str}>
            <th>{str}</th>
            <td>
              <input
                type="text"
                value={data[0]}
                onChange={e => handleOnChange(i, e.target.value)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
