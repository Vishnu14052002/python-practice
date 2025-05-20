import { useState, useEffect } from "react";

/*
  Goal: show the current time on screen and update it every second.
*/

export default function Clock() {
    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
          }, 1000);
    }, []);
    


    console.log(Date())


    const [time, setTime] = useState(new Date().toLocaleTimeString());

    
    return <h1>{time}</h1>;
}
