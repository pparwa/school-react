import { createSlice } from "@reduxjs/toolkit";



const UserSlice = createSlice({
    name:"user",
    initialState:{},
    reducers:{
        login:(state , action)=>{
            return {
                id:action.payload.id,
            name:action.payload.name,
            lastname:action.payload.lastname,
             grade:action.payload.grade
            }

        },
        logout:(state , action)=>{
           return  state = [];
            
        }
    }
})
export const {login , logout} = UserSlice.actions
export default UserSlice.reducer