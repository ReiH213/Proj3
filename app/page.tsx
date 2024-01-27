"use client"
import Image from 'next/image'
import LoginForm from './components/LoginForm'
import { useState } from 'react'
import RegForm from './components/RegForm'

export default function Home() {
  const [firsttime,setFirsttime] = useState(false)
  const switchState=()=>{
    setFirsttime(!firsttime)
  }
  return (
    <main className="flex min-h-full flex-col items-center justify-between p-4">
      <div className="flex justify-between items-center h-screen min-w-full p-10">
        <div className="text-center">
          <h1 className={`text-4xl font-bold text-gradient`}>Welcome to  MathQuest</h1>
        </div>
        <div>
          {!firsttime ? (
            <LoginForm fnc={switchState}/>

          ):(
            <RegForm fnc={switchState}/>
          )}
        </div>
      </div>
    </main>
  )
}
