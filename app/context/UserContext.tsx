"use client"

import React, { createContext, useState,useContext } from "react";

type UserContextType = {
    user:{
        username:string;
        account_id:string;
        progress:number;
        level:number;
        xp_points:number;
        token:string;
        character:string;
    };
    updateUser: (username:string,account_id:string,token:string,character:string)=>void;
    updateStats:(progress:number,level:number,xp_points:number)=>void;
    updateUserAndStats:(username:string, account_id:string, token:string, character:string, progress:number, level:number, xp_points:number)=>void
}


export const UserContext = createContext<UserContextType>({
    user:{
        username:'',
        account_id:'',
        progress:0,
        level:0,
        xp_points:0,
        token:'',
        character:''
    },
    updateUser:()=>{},
    updateStats:()=>{},
    updateUserAndStats:()=>{}
})

export function UserProvider({children}:{children:React.ReactNode}){
    const [user,setUser] = useState<{username:string;account_id:string;progress:number;level:number;xp_points:number;token:string;character:string;}>({
        username:'',
        account_id:'',
        progress:0,
        level:0,
        xp_points:0,
        token:'',
        character:''
    })
    const updateUser = (username:string,account_id:string,token:string,character:string)=>{
        setUser({
            username:username,
            account_id:account_id,
            progress:user.progress,
            level:user.level,
            xp_points:user.xp_points,
            token:token,
            character:character
        })
    }
    const updateStats = (progress:number,level:number,xp_points:number)=>{
        setUser({
            username:user.username,
            account_id:user.account_id,
            progress:progress,
            level:level,
            xp_points:xp_points,
            token:user.token,
            character:user.character
        })
    }
    const updateUserAndStats = (username:string, account_id:string, token:string, character:string, progress:number, level:number, xp_points:number) => {
        setUser({
          username,
          account_id,
          progress,
          level,
          xp_points,
          token,
          character
        });
      };

    return(
        <UserContext.Provider value ={{user,updateUser,updateStats,updateUserAndStats }}>
        {children}
        </UserContext.Provider>
    )
}

export const useUser = ()=>useContext(UserContext)