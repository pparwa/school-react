import { createContext, useContext, useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';
const ValueContext = createContext()


const initalstate = {
    money:null,
    loading:false,
    Randomnumber:null,
    id:null

}

const reducer = (state = initalstate , action)=>{

    switch(action.type){
           
       case 'set-money':
        state = {...state,money:action.money,loading:true,id:uuidv4()}
        break;
        case 'reset-money':
        state = {...state,money:0}
        break;
        case 'set-number':
        state ={...state,Randomnumber:Math.floor(Math.random()*10000)}

    }
    return state
}

 const ValueProvider = ({children})=>{
  const [state , dispatch] = useReducer(reducer,initalstate)
  return(
    <ValueContext.Provider value={{state,dispatch}}>
        {children}
    </ValueContext.Provider>
  )
}
const UseValue = ()=>{

    const context = useContext(ValueContext)
    if(!context)
    {
        throw Error('context is not definde')
    }
    const {state ,dispatch} = context
    return{state,dispatch}
  
}
export  {UseValue , ValueProvider}