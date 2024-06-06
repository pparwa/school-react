export const initialUseState = {
    login:false,
    name:"",
    lastname:'',
    id:''
};
export const userReducer = (state = initialUseState,action)=>{

    if(action.type == "login")
    {
        return {login:true,name:action.name,lastname:action.lastname,id:action.id};
    }
    if(action.type == "logout")
    {
        return initialUseState
    }else{
        return state;
    }
}