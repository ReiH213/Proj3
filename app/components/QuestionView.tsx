import { getQuestion, updateAccount } from '@/lib/actions'
import { questionProps } from '@/lib/types'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { HiOutlineEmojiSad } from "react-icons/hi";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from './shad-comp/dialog';
import { useUser } from '../context/UserContext';
const QuestionView = ({ level,closeParent }: { level: number,closeParent:()=>void }) => {
    const [question, setQuestion] = useState<questionProps>()
    const [selected, setSelected] = useState(0)
    const [open, setOpen] = useState(false)
    const [openWrong, setOpenWrong] = useState(false)
    const [openError ,setOpenError] = useState(false)
    const [openUp,setOpenUp] = useState(false)
    const {user,updateStats} = useUser()

    const updatePlayerStats = async()=>{
        const token = user.token
        const id = user.account_id
        if(token && id){
            const result = await updateAccount(token,id,level,level*100)
            console.log(result);
            updateStats(result.progress,result.level,result.xp_points)
            if(result.level!==user.level){
                console.log('Level Up');
                
                
            }
        }
    }
    const handleAnswer = (e: React.MouseEvent) => {
        e.preventDefault()
        if (selected === Number(question?.correct)) {
            console.log("you are right");
            updatePlayerStats()
            setOpen(true)
            setTimeout(() => {
                closeParent(); // close the parent dialog after a delay
            }, 3500);
            
        } else {
            console.log("I am sorry try again");
            setOpenWrong(true)
            setTimeout(() => {
                closeParent(); // close the parent dialog after a delay
            }, 3500);
        }
    }
    const handleClose = () => {
        setOpen(false);
        closeParent()
    };
    async function getQ() {
        const result = await getQuestion(level)
        console.log(result);
        setQuestion(result)
    }
    useEffect(() => {
        const progress = user.progress
        if(progress && Number(progress)<(level-1) && level!==1){
            setOpenError(true)
            setTimeout(() => {
                closeParent(); // close the parent dialog after a delay
            }, 2000);
        }
        if(Number(progress)===0 && level!==1){
            setOpenError(true)
            setTimeout(() => {
                closeParent(); // close the parent dialog after a delay
            }, 2000);
        }
        getQ()
    }, [user])
    return (
        <form className='flex flex-col justify-center  bg-white rounded-lg p-2'>
            <h1 className='text-xl bg-transparent text-black text-center'>Question Number</h1>
            <h1 className='text-2xl bg-transparent text-black text-center'>{question?.question}</h1>
            <ul className='bg-white flex flex-col gap-y-4 mt-3 ml-4'>
                <li className='bg-white flex gap-x-2'>
                    <input type="radio" id='a' name='answer' value={question?.a} onChange={(e) => setSelected(Number(e.target.value))} />
                    <label htmlFor="a">
                        <h1 className='bg-white text-black'>  {question?.a}</h1>
                    </label>
                </li>
                <li className='bg-white flex gap-x-2'>
                    <input type="radio" id='b' name='answer' value={question?.b} onChange={(e) => setSelected(Number(e.target.value))} />
                    <label htmlFor="b">
                        <h1 className='bg-white text-black'>  {question?.b}</h1>
                    </label>
                </li>
                <li className='bg-white flex gap-x-2'>
                    <input type="radio" id='c' name='answer' value={question?.c} onChange={(e) => setSelected(Number(e.target.value))} />
                    <label htmlFor="c">
                        <h1 className='bg-white text-black'>  {question?.c}</h1>
                    </label>
                </li>
                <li className='bg-white flex gap-x-2'>
                    <input type="radio" id='d' name='answer' value={question?.d} onChange={(e) => setSelected(Number(e.target.value))} />
                    <label htmlFor="d">
                        <h1 className='bg-white text-black'>  {question?.d}</h1>
                    </label>
                </li>
            </ul>
            <h1 className='bg-white text-black mt-9 text-center font-bold'>Please select an answer</h1>
            <button onClick={handleAnswer} className='mt-2 rounded-md bg-black text-white p-2 hover:cursor-pointer hover:bg-black/70'>Answer</button>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className='bg-white justify-center items-center '>
                        <Image src="/correct.png" width={150} height={150} alt='correct' className='bg-transparent mb-4'/>
                        <h1 className='bg-inherit text-black text-center'>You are Correct !</h1>
                        <h1 className='bg-inherit text-black text-center'>Well Done</h1>
                </DialogContent>
            </Dialog>
            <Dialog open={openWrong} onOpenChange={setOpenWrong}>
                <DialogContent className='bg-white justify-center items-center '>
                        <HiOutlineEmojiSad color='red' size="icon"/>
                        <h1 className='bg-inherit text-black text-center text-2xl'>I am Sorry , thats incorrect</h1>
                        <h1 className='bg-inherit text-black text-center text-xl'>Gather your strength and try again</h1>
                </DialogContent>
            </Dialog>
            <Dialog open={openError} onOpenChange={setOpenError}>
                <DialogContent className='bg-white justify-center items-center '>
                        <h1 className='bg-inherit text-black text-center text-2xl'>I am Sorry, progress further in the story to face this challenge</h1>
                </DialogContent>
            </Dialog>
        </form>
    )
}

export default QuestionView
