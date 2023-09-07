"use client";
import React, { useState, useEffect } from 'react';
import { AiFillHeart} from "react-icons/ai"




export default function Footer() {
  const [day, setDay] = useState("");
  const [time, setTime] = useState("")

  useEffect(() => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const newDate = new Date();
    const newDays = newDate.getDay();
    const actualDay = days[newDays];

    setDay(actualDay);
  }, []);

  useEffect(() =>{
    const timer =()=>{
      const updatedTimer = new Date().toTimeString();
      setTime(updatedTimer)
    }

    const interval = setInterval(timer, 1000)
    return ()=> clearInterval(interval)
  }, [])

  return (
    <div className="bg-gray-900 text-white py-8 px-10">
    <div className="container mx-auto flex justify-between items-center">
     <div data-testid="currentDayOfTheWeek" className='flex'> <p className="text-lg flex ">Today is {day} <AiFillHeart className='ml-5' size={25}/></p></div>
      <p  data-testid="currentUTCTime" className="text-lg">Current UTC Time: {time}</p>
    </div>
  </div>
  
  );
}
