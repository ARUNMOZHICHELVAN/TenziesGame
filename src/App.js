// import logo from './logo.svg';
import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import clicksound from "./clicksound.mp3"
import congrats from "./congrats.mp3"
import Die from "./Die"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"

// import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
function App() {
  const [arr, setarr] = useState(randomArray())
  const [Rolls, setRolls] = useState(0)
  const dataFetchedRef = useRef(false);
  const [tenzie, settenzie] = useState(false)
  useEffect(() => {
    const allheld = arr.every(die => die.isSelected)
    const firsvalue = arr[0].value
    const allsame = arr.every(die => die.value === firsvalue)
    if (allheld && allsame) {
      settenzie(true)
      const congrat = new Audio(congrats)
      congrat.play()
      console.log("YOU WON😍")
    }
  }, [arr])
  useEffect(() => {
    if (dataFetchedRef.current) { return; }
    window.addEventListener('keydown', (Event) => {
      if (Event.key === 'a') {
        console.log(Event.key)
        // console.log(arr[0].key)
        update(arr[0].key)

      }
    })
  }, [])

  function randomArray() {
    const x = []
    for (let i = 0; i < 10; i++) {
      x.push({
        value: (Math.floor(Math.random() * 6)) + 1,
        isSelected: false,
        key: nanoid()
      }
      )
    }
    // console.log(x)
    return x
  }
  // console.log(arr)
  function update(key) {
    const audio = new Audio(clicksound)
    console.log("audio")
    audio.play()
    setRolls(prev => prev + 1)
    // console.log(+ key)
    const newObject = arr.map((prev) => {
      return {
        ...prev,
        isSelected: key === prev.key ? !prev.isSelected : prev.isSelected
      }
    })
    setarr(prev => newObject)

  }
  function partialRandom() {
    setarr((prev) => prev.map((die) => {
      if (die.isSelected === true) {
        return { ...die }
      }
      else {
        return {
          ...die,
          value: (Math.floor(Math.random() * 6)) + 1
        }
      }
    }))
  }
  const diceElements = arr.map((prev) => {
    // console.log(prev.key)
    return (
      <Die

        // id={prev.id}
        mykey={prev.key}
        data={prev.value}
        isSelected={prev.isSelected}
        update={() => update(prev.key)}
      // updat
      />
      // <p>adsfad</p>

    )
  })
  function newgame() {
    setRolls(0)
    settenzie(false)
    setarr(randomArray())
  }
  return (
    <div className="p-10">
      {tenzie && <Confetti />}
      <div className="p-10 border flex items-center bg-black ">
        <div className='p-2 lg:p-10 border flex-1  bg-white rounded-2xl w-full h-84'>
          <div className='flex-1 text-center mb-3 '>
            <h1 className='font-bold text-3xl '>Tenzies</h1>
          </div>
          <div className='text-center mb-4 text-roll text-2xl'>
            Roll until all the dice are same Click each die to freeze at its current value between rolls
          </div>
          <div className='grid grid-cols-3 lg:grid-cols-5 lg:gap-6  lg:p-3 '>
            {diceElements}
          </div>
          <div className='text-center p-2 mt-4'>
            <button onClick={!tenzie ? partialRandom : newgame}
              className='Roll font-bold p-2 rounded text-2xl  text-white border rounded-1xl bg-purple'>{
                tenzie ? "New Game" : "Roll"
              }
            </button>
            <button onClick={!tenzie ? partialRandom : newgame}
              className='Roll font-bold p-2 rounded text-2xl  text-white border rounded-1xl bg-purple'>{
                Rolls
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
