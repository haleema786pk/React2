import React, { useState, useRef } from 'react';
import style from './timer.module.css';

const Stopwatch: React.FC = () => {
  const [timer, setTimer] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const countRef = useRef<NodeJS.Timeout | null>(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    if (countRef.current) {
      clearInterval(countRef.current);
    }
    countRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 10);
  };

  const handlePause = () => {
    if (countRef.current) {
      clearInterval(countRef.current);
    }
    setIsPaused(false);
  };

  const handleResume = () => {
    setIsPaused(true);
    if (countRef.current) {
      clearInterval(countRef.current);
    }
    countRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 10);
  };

  const handleReset = () => {
    if (countRef.current) {
      clearInterval(countRef.current);
    }
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
  };

  const formatTime = () => {
    //Function to formate time slicing 
    const getSeconds = `0${(timer % 60)}`.slice(-2);
    const minutes = Number(`${Math.floor(timer / 60)}`);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);
    const getDays=`0${Math.floor(timer / 86400)}`.slice(-2);
    type time={name: string, content: string};
    const arr : time[]=[];

    if(getDays!=='00')
    {
      arr.push({name:'Days',content: getDays});
    }

    if(getHours!=='00')
    {
      arr.push({name:'Hours',content: getHours});
    }
    if(getMinutes!=='00')
    {
      arr.push({name:'Minutes',content: getMinutes});
    }
    arr.push({name:'Seconds',content: getSeconds});
    return (
      <div className={style.boxholder}>
        {arr.map((ele)=> <div className={style.box}>{ele.name}<hr></hr><div className={style.content}>{ele.content}</div></div>)}
      </div>
    );
  }
  

  return (
    <div className="app">
      <h3>React Stopwatch</h3>
      <div className="stopwatch-card">
        <p>{formatTime()}</p>
        <div className="buttons">
          {!isActive && !isPaused ? (
            <button className={style.start} onClick={handleStart}>Start</button>
          ) : isPaused ? (
            <button className={style.pause} onClick={handlePause}>Pause</button>
          ) : (
            <button className={style.resume} onClick={handleResume}>Resume</button>
          )}
          <button className={style.reset} onClick={handleReset} disabled={!isActive}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
