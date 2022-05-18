import { useState, useEffect } from "react";
function GameTimer(props) {
    const [timeLeft, setTimeLeft] = useState(120) //{
    // const [isActive, setIsActive] = useState(false)
    const {gameActive, handleGameEnd} = props

    // function handleStart(){
        // setIsActive(true)
        // console.log("start timer")
        // console.log(isActive)
        // setInterval(() => {
        //     // const {seconds, minutes} = timeLeft
    
        //     if (timeLeft.seconds > 0) {
        //         (console.log(timeLeft.seconds))
        //         setTimeLeft({...timeLeft, seconds: timeLeft.seconds - 1})
        //     }
    
        //     if (timeLeft.seconds === 0){
        //         if (timeLeft.minutes === 0) {
        //             console.log("TIME!")
        //         } else {
        //             setTimeLeft({minutes: timeLeft.minutes - 1, seconds: 59})
        //         }
        //     }
        // }, 1000)

    // }

    useEffect(() => {
        if(gameActive){
        const interval = setInterval(() => {
            // const {seconds, minutes} = timeLeft
            // console.log(timeLeft.seconds)
            setTimeLeft(timeLeft =>  timeLeft - 1)
            // if (seconds > 0){
            //     console.log(timeLeft.seconds)
            //     setTimeLeft({...timeLeft, seconds: timeLeft.seconds - 1})
            // }
            // setSeconds(seconds => seconds +1);
        }, 1000);
        return () => clearInterval(interval)
    }
    }, [gameActive])

    // useEffect(() => {
    //     // let interval = null;
    //     if (isActive) {
    //         // interval = setInterval(() => {
    //         //     setTimeLeft(seconds => seconds + 1)
    //         // })
    //     }
    // }, [])

    return (
        <>
            {/* <h2>{timeLeft % 60 }: {Math.abs(60 - timeLeft)}</h2> */}
            <h2>{timeLeft}</h2>
        </>
    )
}
export default GameTimer