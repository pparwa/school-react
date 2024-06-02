let initaiastate = null;
export const userReducer = (state = initaiastate,action)=>{

    if(action.type == "add")
    {
        return action.payload;
    }
    if(action.type == "empty")
    {
        return initaiastate
    }else{
        return state;
    }
}