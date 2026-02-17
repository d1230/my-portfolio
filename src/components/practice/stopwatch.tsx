import { useEffect, useState } from "react";

export const Stopwatch = ()=> {
    const [time, setTime] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    useEffect(()=>{
        let interval = null;
        if(isRunning){
            interval = setInterval(()=>{
                setTime((prevTime)=> prevTime + 1);
            },1000)
        }
        return () => {
            if(interval){
                clearInterval(interval);
            }
        }
    },[isRunning]);

    return(<>
        <div className= 'stopwatch'>    {time} seconds  </div>
        <button onClick={()=> setIsRunning(true)}>Start</button>
        <button onClick={()=> setIsRunning(false)}>Stop</button>
        <button onClick={()=> setTime(0)}>Reset</button>      </>  
    )
}