"use client"
import { register_user } from '@/lib/actions'
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from './shad-comp/dialog';
import { heroes } from '@/lib/data';
import HeroCard from './HeroCard';
import { redirect, useRouter } from 'next/navigation';
const RegForm = ({ fnc }: { fnc: () => void }) => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [confirm, setconfirm] = useState('')
    const [username, setusername] = useState('')
    const [hero,setHero] = useState('')
    const [open,setOpen] = useState(false)
    const router = useRouter()
    const handleRegister = async (e: React.FormEvent) => {
        const result = await register_user(username, email, password, confirm,hero)
        console.log(result);
        router.push('/')
    }
    const selectHero = (name:string)=>{
        setHero(name)
        console.log(name);
        
        setOpen(false)
    }
    return (
        <div className='flex justify-center items-center'>
            <form className="flex flex-col space-y-4 bg-white min-h-[300px] items-center justify-center p-4 rounded-md text-white" onSubmit={handleRegister}>
                <div className='bg-white'>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 bg-white">
                        Username
                    </label>
                    <input
                        onChange={(e) => setusername(e.target.value)}
                        value={username}
                        id="username"
                        name="username"
                        type="text"
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md  bg-inherit text-black"
                    />
                </div>
                <div className='bg-white'>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 bg-inherit">
                        Email
                    </label>
                    <input
                        onChange={(e) => setemail(e.target.value)}
                        value={email}
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-inherit text-black"
                    />
                </div>
                <div className='bg-white'>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 bg-white">
                        Password
                    </label>
                    <input
                        onChange={(e) => setpassword(e.target.value)}
                        value={password}
                        id="password"
                        name="password"
                        type="password"
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md  bg-inherit text-black"
                    />
                </div>
                <div className='bg-white'>
                    <label htmlFor="confirm" className="block text-sm font-medium text-gray-700 bg-white">
                        Confirm Password
                    </label>
                    <input
                        onChange={(e) => setconfirm(e.target.value)}
                        value={confirm}
                        id="confirm"
                        name="confirm"
                        type="password"
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md  bg-inherit text-black"
                    />
                </div>
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger className='text-white bg-black rounded-md p-2'>Choose a Hero</DialogTrigger>
                    <DialogContent className=''>
                        <DialogHeader>
                            <DialogTitle className='text-center'>Pick a Hero to fight your battles</DialogTitle>
                            {heroes.map((hero,index)=>(
                                <div key={index} className='flex flex-row justify-center items-center'>
                                    <HeroCard name={hero.name} desc={hero.desc} picture={hero.picture}/>
                                    <button className='flex justify-center items-center rounded-md p-3 bg-white text-black max-h-10 hover:bg-gray-600' onClick={()=>selectHero(hero.name)}>Select</button>
                                </div>
                            ))}
                        </DialogHeader>
                    </DialogContent>
                </Dialog>

                <button type="submit" className="mt-2 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-600/80">
                    Register
                </button>
                <div className='bg-transparent text-gray-600'>
                    <h1 className='bg-transparent'>Already joined ? <span className='text-gray-600 bg-inherit hover:underline hover:cursor-pointer' onClick={() => fnc()}>Log In</span></h1>
                </div>
            </form>
        </div>
    )
}

export default RegForm