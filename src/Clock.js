import React  from "react";
import useClock from "./HookReact";
export default function Clock(){
    const {time,ampm}=useClock();
    console.log({time});
         return(
            <div>
                {time}
                <span>{ampm}</span>
            </div>
         )
}