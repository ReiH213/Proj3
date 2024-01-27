export interface LevelCircleProps{
    level:number;
    x: number;
    y: number;
}

export interface CircleCord{
    top:number;
    left:number;
}

export interface questionProps{
    id:number;
    question:string;
    a:number;
    b:number;
    c:number;
    d:number;
    correct:number;
}


export interface Hero{
    username:string;
    level:number;
    exp:number;
}


export interface Account {
    character:string;
    id:string;
    level:number;
    progress:number;
    username:string;
    xp_points:number;
}