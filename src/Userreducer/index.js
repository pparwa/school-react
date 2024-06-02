export const initialUseState = {
    login:false,
    name:"",
    lastname:'',
};
export const userReducer = (state = initialUseState,action)=>{

    if(action.type == "login")
    {
        return {login:true,name:action.name,lastname:action.lastname};
    }
    if(action.type == "logout")
    {
        return initialUseState
    }else{
        return state;
    }
}