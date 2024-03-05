import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { DayGrid } from '@/features/DayGrid';
import { CreateEvent } from '@/features/CreateEvent';

import './App.css';

function App() {
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState({});

  useEffect(function checkDate() {
    // checks date each minute to ensure App header is correct date incase App is left opne
    const oneMinute = 1000 * 60;
    const id = setInterval(() => {
      setDate(new Date());
    }, oneMinute);

    return () => clearInterval(id);
  }, []);

  function handeClick(start, end, name) {
    // setData(prevState => {
    //   const matchingBlock =
    //   return prevState;
    // });
  }

  return (
    <>
      <Header date={date.toDateString()} />
      <CreateEvent handleClick={handeClick} />
      <main>
        <DayGrid />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
