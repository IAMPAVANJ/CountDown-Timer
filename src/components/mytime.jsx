import { useEffect, useState } from "react"

const Mytimer = ()=>{

const [time,setTime] = useState(0);

useEffect(()=>{
    let interval;
    if(time>0){
        interval = setInterval(()=>{
            setTime(time-1)
        },1000)
    } 
    return ()=>clearInterval(interval)
},[time])
   
const handlkeKeyDown = (e)=>{
    if(e.key==="Enter"){
        let input = parseInt(e.target.value)
        setTime(isNaN(input)?0:Math.floor(input))
        e.target.value=""
    }
}

    return(
        <div>
            <input type="number" onKeyDown={handlkeKeyDown}/>
            <div>{time}</div>
        </div>
    )
}
export default Mytimer