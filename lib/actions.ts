
export async function register_user(username:string,email:string,password:string,confirm:string,hero:string){
    const response = await fetch('http://localhost:4500/user/register',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            username:username,
            email:email,
            password:password,
            confirm:confirm,
            character:hero
        })
    })
    const result = await response.json()
    return result
}

export async function login(email:string,password:string){
  try {
      const response = await fetch('http://localhost:4500/auth/login',{
          method:'POST',
          headers:{
              'Content-Type':'application/json',
          },
          body:JSON.stringify({
              username:email,
              password:password
          })
      })
      const result = await response.json()
      return result
  } catch (error) {
    console.log(error);
    
  }
}


export async function getQuestions(){
    try {
        const response = await fetch('http://localhost:4500/questions',{
            method:'GET',
            next:{revalidate:7200},
            
        })
        const result = await response.json()
        
        return result
    } catch (error) {
        console.log(error);
        
    }
}

export async function getQuestion(id:number){
    try {
        const response = await fetch(`http://localhost:4500/questions/${id}`,{
            method:'GET',
            next:{revalidate:3600}
            
        })
        const result = await response.json()
        
        return result
    } catch (error) {
        console.log(error);
        
    }
}


export async function getProfile(token:string){
    try {
        const response = await fetch(`http://localhost:4500/auth/profile`,{
            method:'GET',
            headers:{
                'Authorization':`Bearer ${token}`
            }
            
        })
        const result = await response.json()
        
        return result
    } catch (error) {
        console.log(error);
        
    }
}

export async function getAccount(token:string,id:string){
    try {
        const response = await fetch(`http://localhost:4500/account/${id}`,{
            method:'GET',
            headers:{
                'Authorization':`Bearer ${token}`
            }
            
        })
        const result = await response.json()
        
        return result
    } catch (error) {
        console.log(error);
        
    }
}


export async function updateAccount(token:string,id:string,progress:number,xp_points:number){

    
    try {
        const response = await fetch(`http://localhost:4500/account/${id}`,{
            method:'PUT',
            headers:{
                'Authorization':`Bearer ${token}`,
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                xp_points:xp_points,
                progress:progress,
            })
            
        })
        const result = await response.json()
        
        return result
    } catch (error) {
        console.log(error);
        
    }
}

