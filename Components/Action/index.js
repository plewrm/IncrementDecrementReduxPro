export const increment =(no)=>{
    return{
        type:"INCREMENT",
        payload:no
    }
}

export const decrement =()=>{
    return{
        type:"DECREMENT"
    }
}