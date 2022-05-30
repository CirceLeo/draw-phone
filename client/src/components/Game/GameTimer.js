import { useState, useEffect } from "react";
import useSound from "use-sound"
import ticking from '../../sounds/ticking.m4a'

import * as Tone from 'tone'
import { FMSynth } from 'tone';

function GameTimer(props) {
    const {gameActive, picLoaded, handleGameEnd, playTime, gameStarted} = props
    //timer keeps rerendering cause it gets disappeard...leave timer up during pause?
    const [timeLeft, setTimeLeft] = useState(playTime) 

    // const synth = new Tone.PolySynth(FMSynth).toDestination()
    const synth = new Tone.Synth().toDestination()
    const chord = Tone.Frequency(`D#4`)//.harmonize([7]) // major

    function playSound(){
        const now = Tone.now()
        synth.triggerAttackRelease("C6", "8n", now )
        synth.triggerAttackRelease("C6", "8n", now + .25)
        // synth.triggerAttackRelease("G4", "2n", now + 2)
        // synth.triggerAttackRelease("B4", "4n", now + 2)
        Tone.start()
        // synth.triggerAttackRelease("C4", "6n")
        // Tone.start()
        // synth.triggerAttackRelease("G4", "6n")
        // Tone.start()

    }

    useEffect(() => {
        if(gameActive){
        const interval = setInterval(() => {
            setTimeLeft(timeLeft =>  timeLeft - 1)
        }, 1000);
        return () => clearInterval(interval)
    }
}, [picLoaded, gameActive])

useEffect(() => {
        if (timeLeft === 0) {
            console.log("time's up!")
            handleGameEnd()
        }
    }, [timeLeft])

const secondsLeft = Math.abs(timeLeft % 60)

if(timeLeft === 15){
    playSound()
}
    
    return (
        <>
            <h2 style={{color: timeLeft < (playTime / 2) ? "red" : "black"}}>{Math.floor(timeLeft / 60) }:{secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}</h2>
            <button onClick={playSound}>noise</button>
            {/* <h2 style={{color: timeLeft < 60 ? "red" : "black"}}>{timeLeft}</h2> */}
        </>
    )
}
export default GameTimer

            // if (seconds > 0){
                //     console.log(timeLeft.seconds)
                //     setTimeLeft({...timeLeft, seconds: timeLeft.seconds - 1})
                // }
            // setSeconds(seconds => seconds +1);

// const {seconds, minutes} = timeLeft
// console.log(timeLeft.seconds)
    // useEffect(() => {
    //     // let interval = null;
    //     if (isActive) {
    //         // interval = setInterval(() => {
    //         //     setTimeLeft(seconds => seconds + 1)
    //         // })
    //     }
    // }, [])


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