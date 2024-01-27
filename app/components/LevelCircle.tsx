"use client"
import styles from './components.module.css'
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './shad-comp/dialog';
import QuestionView from './QuestionView';
import { useUser } from '../context/UserContext';


const LevelCircle = ({ level }: { level: number }) => {
  const [open, setOpen] = useState(false);
  const {user} = useUser()
    const closeDialog = () => {
        setOpen(false);
    };
    const circleClass = user.progress >= level ? `${styles.level_circle} bg-green-500` : styles.level_circle;
  return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
        <div className={`${circleClass}`}>
        {level}
        </div>
        </DialogTrigger>
        <DialogContent>
          <QuestionView level={level} closeParent={closeDialog}/>
        </DialogContent>


      </Dialog>
  );
};

export default LevelCircle;
