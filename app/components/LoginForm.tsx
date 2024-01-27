"use client"
import { getAccount, getProfile, login } from '@/lib/actions'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '../context/UserContext'
const LoginForm = ({ fnc }: { fnc: () => void }) => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const {updateUserAndStats} = useUser()
    const router = useRouter()
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()        
        const result = await login(email, password)
        if(result.access_token){
            localStorage.setItem('token',result.access_token)
            const profile = await getProfile(result.access_token)
            if(profile.username){
                const account = await getAccount(result.access_token,profile.account_id)             
                if(account.character){                  
                    updateUserAndStats(account.username,account.id,result.access_token,account.character,account.progress,account.level,account.xp_points)  
                    router.push('/main')
                }
            }
            
            
        }

    }
    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className='flex'>
            <form className="flex flex-col space-y-4 bg-white min-h-[300px] items-center justify-center p-4 rounded-md text-white" onSubmit={handleLogin}>
                <div className='bg-white'>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 bg-inherit">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-inherit text-black"
                        onChange={(e)=>setemail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className='bg-white'>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 bg-white">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md  bg-inherit text-black"
                        onChange={(e)=>setpassword(e.target.value)}
                        value={password}
                    />
                    <button onClick={toggleShowPassword} type="button">
                        {showPassword ? "Hide Password" : "Show Password"}
                        
                    </button>
                </div>
                <button type="submit" className="mt-2 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-600/80">
                    Login
                </button>
                <div className='bg-transparent text-gray-600'>
                    <h1 className='bg-transparent'>First time hero ? <span className='text-gray-600 bg-inherit hover:underline hover:cursor-pointer' onClick={() => fnc()}>Register</span></h1>
                </div>
            </form>
        </div>
    )
}

export default LoginForm