"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { heroes } from '@/lib/data'
import { useUser } from '../context/UserContext'
import { Dialog, DialogContent } from './shad-comp/dialog'
const Hero = () => {
  const [picture,setPicture] = useState('')
  const[levelUp,setLevelUp] = useState(false)
  const {user} = useUser()
useEffect(()=>{
  


  if(user.character==='Addinator'){
    setPicture(heroes[0].picture)
  }else if(user.character==='Subtracto'){
    setPicture(heroes[1].picture)
  }else if(user.character==='QuantumQuadrupler'){
    setPicture(heroes[2].picture)
  }else if (user.character==='Divideon'){
    setPicture(heroes[3].picture)
  }
},[user])

  return (
    <div className='flex flex-col items-center justify-between h-full p-4 top-0,left-0'>
      <div className='flex flex-col items-center gap-y-4'>
        <h1>{user.character}</h1>
          <Image src={picture} height={150} width={150} alt='hero'/>
        <h2 className='text-xl font-bold'>{user.username}</h2>
      </div>
      <div className='flex flex-col items-center'>
        <h3 className='text-lg font-bold'>Level: {user.level}</h3>
        <p>Experience Points: {user.xp_points}</p>
        <p>Progress: {user.progress}</p>
      </div>
      <Dialog open={levelUp} onOpenChange={setLevelUp}>
                <DialogContent className='bg-white justify-center items-center '>
                        <h1 className='bg-inherit text-black text-center text-2xl'>I am Sorry, progress further in the story to face this challenge</h1>
                </DialogContent>
            </Dialog>
    </div>
  )
}

export default Hero
