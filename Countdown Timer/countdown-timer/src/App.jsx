import { useEffect, useState } from "react";
import "./App.css";
import InputTimer from "./inputTimer";
import ShowTimer from "./ShowTimer";

function App() {
  const[isStart,setIsStart]=useState(false)
  const[isPaused,setIsPaused]=useState(false)

  const[hours,setHours]=useState(0);
  const[minutes,setMinutes]=useState(0);
  const[seconds,setSeconds]=useState(0);
  const[timerId,setTimerId]=useState(0);

  const handleStart=()=>{
    if(hours<0 || minutes<0 ||seconds<=0){
      alert("Invalid Input");
      return;
    }
    setIsStart(true);

  }
  const handleReset=()=>{
    setIsStart(false);
    setHours(0);
    setMinutes(0);
      setSeconds(0);
      clearInterval(timerId);
  }

  const handleResume=()=>{
    setIsPaused(false);
    runTimer(seconds,minutes,hours)
  }

  const handlePause=(()=>{
    setIsPaused(true);
    clearInterval(timerId);

  })

  const handleInput=(e)=>{
    const value=parseInt(e.target.value);
    const id=e.target.id;
    if(id=="hours"){
      setHours(value);
    }else if(id=="minutes"){
      setMinutes(value);
    }else{
      setSeconds(value);
    }

  }
  // console.log(hours,minutes,seconds);

  const runTimer=(sec,min,hr,tid)=>{
    if(sec>0){
      setSeconds((s)=>s-1);
    }else if(sec===0 && min>0){
      setMinutes((m)=>m-1);
      setSeconds(59);
    }else{
      setHours((h=>h+1));
      setMinutes(59);
      setSeconds(59);
    }
    if(sec==0 && min==0 && hr==0){
      // setHours(0);
      // setMinutes(0);
      // setSeconds(0);
      // clearInterval(tid);
      handleReset();
      alert("Timer Finished");
      clearInterval(tid);
      return;
    }
  }

  useEffect(()=>{
    let tid;
    if(isStart){

   tid =setInterval(()=>{
    runTimer(seconds,minutes,hours,tid);

    },1000)
    setTimerId(tid);
    
  }
  return()=>{
    clearInterval(tid);
  }

  },[isStart,hours,minutes,seconds]);



  return <>
  <h1>Countdown Timer</h1>
 {
  !isStart && <InputTimer 
  handleStart={handleStart}
  handleInput={handleInput}
  />
 }
 {
  isStart &&  <ShowTimer
  hours={hours}
  minutes={minutes}
  seconds={seconds}
  isPaused={isPaused}
  handlePause={handlePause}
  handleReset={handleReset}
  handleResume={handleResume}
  />
 }
  </>
}

export default App;
